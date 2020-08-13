import fetch from 'isomorphic-fetch';
//comment made in test-branch
export default function getFacts(){
    return fetch('https://ssr-react.firebaseio.com/facts.json')
        .then(res => res.json());
}
