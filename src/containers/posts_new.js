import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { createPost } from '../actions/index'


const TITLE_FIELD_NAME = 'title';
const CATEGORIES_FIELD_NAME = 'categories';
const CONTENT_FIELD_NAME = 'content';



class PostsNew extends Component {
    render() {
        const { handleSubmit } = this.props;
        return (
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field
                   name={TITLE_FIELD_NAME}
                   label="Title"
                   component={this.renderField}
               />
               <Field
                   name={CATEGORIES_FIELD_NAME}
                   label="Categories"
                   component={this.renderField}
               />
               <Field
                   name={CONTENT_FIELD_NAME}
                   label="Post Content"
                   component={this.renderField}
               />
               <button type="submit" className="btn btn-primary"> Submit </button>
               <Link to="/" className="btn btn-danger">Cancel</Link>
           </form>
        );
    }

    renderField({input, label, meta}) {
        const {touched, error} =  meta;
        const className = `form-group ${(touched && error) ? 'has-danger': ''}`;

        return (
            <div className={className}>
                <label>{label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...input}
                />
                <div className="text-help">
                    {touched ? error : ''}
                </div>

            </div>
        )
    }

    onSubmit(values) {
        console.log('onSubmit', values);
        console.log('onSubmit', this.props);
        this.props.createPost(values, () => {
            this.props.history.push('/')
        });
    }
}

const validate = (values) => {
    const errors = {};
    const {title, categories, content} = values;

    if (!title) {
        errors[TITLE_FIELD_NAME] = "Enter a title"
    } else if (title.length < 3) {
        errors[TITLE_FIELD_NAME] = "Title must be at least 3 characters!"
    }

    if (!categories) {
        errors[CATEGORIES_FIELD_NAME] = "Enter some categories"
    }

    if (!content) {
        errors[CONTENT_FIELD_NAME] = "Enter some content please"
    }

    return errors;

}

export default  reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);