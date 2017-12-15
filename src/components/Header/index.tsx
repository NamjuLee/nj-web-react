import * as React from 'react';

import './index.css';

interface Props {
    name: string;
    age?: number;
}

// stateless compoennt 
export default (props: Props) => (
    <div className="header">
        <div className="header-title">this is the header</div>
        <div className="header-greeting">hello, {props.name}{props.age ? props.age + ', old year!' : ''}  </div>
        <div className="header-greeting">hello, {props.name}{props.age && props.age + ', old year!'}  </div>
    </div>
);

// export default ({ name, age = 100 }: Props) => (
//     <div className="header">
//         <div className="header-title">this is the header</div>
//         <div className="header-greeting">hello, {name}, {age} old year! </div>
//     </div>
// );
