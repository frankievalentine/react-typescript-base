import * as React from "react";

// Stateless or functional components defined in Typescript
// React.FunctionComponent defining the object structure of expected props
// Passing in a single prop named count and defined in line

// Defined object structure using interface
interface Props {
    count: number;
}

const Count: React.FunctionComponent<Props> = props => {
    return <h1>{props.count}</h1>;
};

// Stateless without interface
// const Count: React.FunctionComponent<{
//     count: number;
// }> = props => {
//     return <h1>{props.count}</h1>;
// };

export default Count;
