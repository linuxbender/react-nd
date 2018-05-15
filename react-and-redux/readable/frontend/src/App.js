import React from 'react';
import './styles/App.css';
import Header from './components/common/Header';
import NewPost from './components/home/NewPost';

const App = () => {
    return (
        <div>
            <Header></Header>
            <section className="articles">
                <NewPost></NewPost>
                <article>
                    <img alt="udacity" src="img/udacity-logo.svg"/>
                    <header>Title..</header>
                    <div className="article-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, beatae dignissimos eveniet
                        excepturi
                        exercitationem fugiat nemo perspiciatis quibusdam quisquam recusandae reiciendis, sit ullam! Ad
                        earum
                        eum
                        laborum nulla quas reiciendis?
                    </div>
                    <footer>Footer | Footer</footer>
                </article>
                <article>
                    <img alt="react" src="img/react-logo.svg"/>
                    <header>Title..</header>
                    <div className="article-content">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, beatae dignissimos eveniet
                        excepturi
                        exercitationem fugiat nemo perspiciatis quibusdam quisquam recusandae reiciendis, sit ullam! Ad
                        earum
                        eum
                        laborum nulla quas reiciendis?
                    </div>
                    <footer>Footer | Footer</footer>
                </article>
            </section>
        </div>
    );
};

export default App;