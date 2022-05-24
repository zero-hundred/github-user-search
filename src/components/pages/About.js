import React, { Fragment } from 'react'
import Styles from './about.module.scss';
const About = () => {
    return (
        <div className={`${Styles.about}`}>
            <Fragment>
                <h3 className={Styles.version}>v1.3.0</h3>
                <h1 className={Styles.header}>About</h1>
                <p>This app allows users to search for a or multiple Github users' public profile.
                    Built using ReactJs, axios and utilizes the Github API. Additional features and 
                    UI updates will be implemented in the near future.
                </p>
            </Fragment>
           
           <Fragment>
               <h2 className={Styles.header}>Basic Instructions</h2>

               <ol className={`${Styles.howTo}`}>
                    <li className={`${Styles.step}`}>
                        Enter a user's <i>"irl"</i> name or username into the search bar.
                    </li>
                    <li className={`${Styles.step}`}>
                        If you see who you are looking for click <strong><u>more</u></strong> to view their profile.<br/>
                        <i>(If the user is not found try to be more precise with the search)</i>
                    </li>
                    <li className={`${Styles.step}`}>
                        The information displayed is what the user's public details. Click available links 
                        to be redirected.
                    </li>
                    <li className={`${Styles.step}`}>
                        To return to search results. Hit either the <strong>search</strong> or 
                        <strong>home</strong> button.
                    </li>
                    <li className={`${Styles.step}`}>
                        To clear the results either hit the <strong>clear</strong> button or 
                        for the faint of heart refresh the homepage.
                    </li>
                    <li className={`${Styles.step}`}>
                        If any bugs are found please submit a ticket {' '}
                        <a className={Styles.link} href="https://github.com/NotKijana/github-user-search" 
                        target="_blank" rel="noopener noreferrer">
                            <u>here</u>
                        </a>
                    </li>
                </ol>
           </Fragment>
        </div>
    )
}
export default About;