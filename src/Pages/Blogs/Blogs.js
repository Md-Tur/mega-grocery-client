import React from 'react';

const Blogs = () => {
    return (
        <div className='container justify-content-center mt-2'>
            <div>
                <h3>Difference between JS and nodeJS</h3>
                <div className='d-flex'>
                    <div>
                        <p>JS</p>
                        <ol>
                            <li>It's a programming language that is used for writing scripts on the website.</li>
                            <li>It's only can be run into browser.</li>
                            <li>It's basically used on client-side.</li>
                        </ol>
                    </div>
                    <div>
                        <p>nodeJS</p>
                        <ol>
                            <li>It's a javascript runtime environment.</li>
                            <li>It can run JS outside browser.</li>
                            <li>It's mostly used on server-side.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div>
                <h3>Difference between SQL and NoSQL</h3>
                <div className='d-flex'>
                    <div>
                        <p>SQL</p>
                        <ol>
                            <li>It's Relational Database Management System.</li>
                            <li>It follows ACID property.</li>
                            <li>It's vertically sclable.</li>
                        </ol>
                    </div>
                    <div>
                        <p>NoSQL</p>
                        <ol>
                            <li>It's distributed database system.</li>
                            <li>It follows CAP.</li>
                            <li>It's horizontally sclable.</li>
                        </ol>
                    </div>
                </div>
            </div>
            <div>
                <h3>What other services does firebase provide other than authentication?</h3>
                <ol>
                    Firebase other services: Firebase provide us many services
                    <li>Hosting</li>
                    <li>Google Analytics</li>
                    <li>Cloud Storage</li>
                    <li>Cloud Functions</li>
                    <li>Cloud Firestore</li>
                    <li>Cloud Messaging and so on...</li>
                </ol>
            </div>
        </div>
    );
};

export default Blogs;