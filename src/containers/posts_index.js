import React, {Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
    componentDidMount() {
        this.props.fetchPosts()
    }
    render() {
        console.log(this.props.posts)
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Add a Post
                    </Link>
                </div>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        })

    }
}


function mapStateToProps({posts, form}) {
    console.log(form)
    return { posts };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);