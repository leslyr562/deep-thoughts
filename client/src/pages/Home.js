import React from 'react';

//With these statements, we're importing the useQuery Hook from Apollo Client.
// This will allow us to make requests to the GraphQL server we connected to 
//and made available to the application using the <ApolloProvider> component in app.js
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);

  //This is called optional chaining Optional chaining negates the 
  //need to check if an object even exists before accessing its properties
 // What we're saying is, if data exists, store it in the thoughts constant we
  // just created. If data is undefined, then save an empty array to the thoughts component.
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
    <div className="flex-row justify-space-between">
      <div className="col-12 mb-3">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ThoughtList thoughts={thoughts} title="Some Feed for Thought(s)..." />
        )}
      </div>
    </div>
  </main>
  );
};

export default Home;
