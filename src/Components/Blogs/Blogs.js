import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-solid border-2 border-indigo-600 p-5 rounded-md mx-5'>
                <h1 className='font-bold'>Q1:Difference between authorization and authentication</h1>
                <p>ans:Authentication is the simple process of verifying someone who claim his identity is true.for example:someone wants to login.and Authorization is the process of allowing someone to do something or use some data for example:admin of facebook group</p>
            </div>
            <div className='border-solid border-2 border-indigo-600 p-5 rounded-md mx-5 my-2'>
                <h1 className='font-bold'>Q2:Why are you using firebase? What other options do you have to implement authentication?</h1>
                <p>ans:Firebase provides authentication services to your app.mainly firebase provides backend services and it is  easy to use becuase it has ready-made libraries.Apart from firebase we have many more alternatives for authentication.for example:Supabase,Kuzzle,Parse</p>
            </div>
            <div className='border-solid border-2 border-indigo-600 p-5 rounded-md mx-5 my-2'>
                <h1 className='font-bold'>Q3:What other services does firebase provide other than authentication</h1>
                <p>ans:There are many services which Firebase provides.for example:Cloud Firestore,Hosting,Google Analytics,Cloud Messaging</p>
            </div>
        </div>
    );
};

export default Blogs;