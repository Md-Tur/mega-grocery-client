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
                <h3>When should use nodeJS and when mongoDB?</h3>
                <p>
                    nodeJS: <br />
                    while desigining a high performance application then node js is very effective. It also allows to write server side application. It's fast than others. wide range of hosting options. about 99% developers has knowledge on it.
                </p>
                <p>
                    mongoDB: <br />
                    when you need high availability of data with automatic,fast and instant data recovery. if there is unstable schema and want to reduce schema migration cost. if most services are cloud based.
                </p>
            </div>
        </div>
    );
};

export default Blogs;