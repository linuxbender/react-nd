import React from 'react';
import {connect} from 'react-redux';
import withRouter from 'react-router-dom/es/withRouter';
import {createNewPost} from '../../actions/postActions';
import {uuidv4} from '../../utils/numberHelper';
import {T_DetailPost} from '../../utils/typeHelper';

class DetailPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = T_DetailPost;
    }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleSubmit = event => {
        this.setState({id: uuidv4(), timestamp: Date.now()}, () => this.props.dispatch(createNewPost(this.state)));
        event.preventDefault();
    };

    handleReset = event => {
        //  this.setState(Object.assign({}, T_Post));
    };

    componentDidMount() {
        console.log(this.props);
        console.log(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({category: nextProps.activeCategory});
    }

    render() {
        return (
            <article className="article-detail">
                <img alt="redux" src="img/redux-logo.svg"/>
                <header>Title.. detail</header>
                <div className="article-content">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam,
                    beatae
                    dignissimos eveniet excepturi exercitationem fugiat nemo perspiciatis quibusdam quisquam
                    recusandae
                    reiciendis, sit ullam! Ad earum eum laborum nulla quas reiciendis?
                </div>
                <footer>
                    <i className="icon-24-blue-90">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16" viewBox="0 0 10 16">
                            <path fillRule="evenodd"
                                  d="M9 0H1C.27 0 0 .27 0 1v15l5-3.09L10 16V1c0-.73-.27-1-1-1zm-.78 4.25L6.36 5.61l.72 2.16c.06.22-.02.28-.2.17L5 6.6 3.12 7.94c-.19.11-.25.05-.2-.17l.72-2.16-1.86-1.36c-.17-.16-.14-.23.09-.23l2.3-.03.7-2.16h.25l.7 2.16 2.3.03c.23 0 .27.08.09.23h.01z"/>
                        </svg>
                        12.02.2018, I'm Groot
                    </i>
                    <button className="button-action">
                        <i className="icon-24-red-90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                <path fillRule="evenodd"
                                      d="M11.2 3c-.52-.63-1.25-.95-2.2-1-.97 0-1.69.42-2.2 1-.51.58-.78.92-.8 1-.02-.08-.28-.42-.8-1-.52-.58-1.17-1-2.2-1-.95.05-1.69.38-2.2 1-.52.61-.78 1.28-.8 2 0 .52.09 1.52.67 2.67C1.25 8.82 3.01 10.61 6 13c2.98-2.39 4.77-4.17 5.34-5.33C11.91 6.51 12 5.5 12 5c-.02-.72-.28-1.39-.8-2.02V3z"/>
                            </svg>
                        </i>12
                    </button>
                    <button className="button-action">
                        <i className="icon-24-black-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                <path fillRule="evenodd"
                                      d="M0 11.592v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3l-1.3 1.3-3-3 1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/>
                            </svg>
                        </i>edit
                    </button>
                    <button className="button-action">
                        <i className="icon-24-red-90">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16">
                                <path fillRule="evenodd"
                                      d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"/>
                            </svg>
                        </i>delete
                    </button>
                </footer>
                <section className="section-comments">
                    <header>
                        <i className="icon-32-black-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                      d="M15 1H6c-.55 0-1 .45-1 1v2H1c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h1v3l3-3h4c.55 0 1-.45 1-1V9h1l3 3V9h1c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM9 11H4.5L3 12.5V11H1V5h4v3c0 .55.45 1 1 1h3v2zm6-3h-2v1.5L11.5 8H6V2h9v6z"/>
                            </svg>
                        </i>
                        2 Comments...
                    </header>
                    <article>
                        <div className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi at debitis
                            distinctio
                            eligendi expedita.
                        </div>
                        <footer>
                            <i className="icon-24-blue-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"/>
                                </svg>
                                12.02.2018, I'm Groot
                            </i>
                            <nav>
                                <button className="button-action">
                                    <i className="icon-24-red-90">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"
                                             viewBox="0 0 12 16">
                                            <path fillRule="evenodd"
                                                  d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"/>
                                        </svg>
                                    </i>delete
                                </button>
                            </nav>
                        </footer>
                    </article>
                    <article>
                        <div className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam animi at debitis
                            distinctio
                            eligendi expedita.
                        </div>
                        <footer>
                            <i className="icon-24-blue-90">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                                    <path fillRule="evenodd"
                                          d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"/>
                                </svg>
                                12.02.2018, I'm Groot
                            </i>
                            <nav>
                                <button className="button-action">
                                    <i className="icon-24-red-90">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"
                                             viewBox="0 0 12 16">
                                            <path fillRule="evenodd"
                                                  d="M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"/>
                                        </svg>
                                    </i>delete
                                </button>
                            </nav>
                        </footer>
                    </article>
                    <article className="comment-delete">
                        <header>Delete Comment!</header>
                        <div className="comment-content">
                            <div className="form-group">
                                <i className="icon-48-white-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16"
                                         viewBox="0 0 14 16">
                                        <path fillRule="evenodd"
                                              d="M10 1H4L0 5v6l4 4h6l4-4V5l-4-4zm3 9.5L9.5 14h-5L1 10.5v-5L4.5 2h5L13 5.5v5zM6 4h2v5H6V4zm0 6h2v2H6v-2z"/>
                                    </svg>
                                    <label>Hi, do you really want to delete this comment?</label>
                                </i>
                            </div>
                        </div>
                        <footer>
                            <nav>
                                <button className="button-error">Delete</button>
                                <button>Cancel</button>
                            </nav>
                        </footer>
                    </article>
                    <article className="comment-add">
                        <header>
                            <i className="icon-24-black-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16">
                                    <path fillRule="evenodd"
                                          d="M0 11.592v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3l-1.3 1.3-3-3 1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/>
                                </svg>
                            </i>
                            Create a new comment
                        </header>
                        <div className="comment-content">
                            <div className="form-group">
                                <label>Your Comment:
                                    <i className="icon-16-orange-60">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                  d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/>
                                        </svg>
                                    </i>
                                </label>
                                <textarea name="formContent"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Author:
                                    <i className="icon-16-green-90">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="16"
                                             viewBox="0 0 12 16">
                                            <path fillRule="evenodd"
                                                  d="M12 5.5l-8 8-4-4L1.5 8 4 10.5 10.5 4 12 5.5z"/>
                                        </svg>
                                    </i>
                                </label>
                                <input name="formAuthor" value=""/>
                            </div>
                            <div className="form-group">
                                <nav>
                                    <button className="button-primary">Save</button>
                                    <button>Reset</button>
                                </nav>
                            </div>
                        </div>
                    </article>
                </section>
            </article>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state.apiCallsInProgress > 0,
    activeCategory: state.navActiveCategory
});

export default withRouter(connect(mapStateToProps)(DetailPost));