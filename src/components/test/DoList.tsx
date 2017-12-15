import * as React from 'react';

interface Props {
    items: number[];
}
// export default (props: {items: number[]}) => (
export default (props: Props) => (

    <div className="do-list">
        {/* <div className="do-list-item">{props.items[0]}</div>
        <div className="do-list-item">{props.items[1]}</div>
        <div className="do-list-item">{props.items[2]}</div>
        <div className="do-list-item">{props.items[3]}</div> */}
        {
            props.items.map(item => (
                <div key={item} className="do-list-item">{item}!!!</div>
            ))
        }
    </div>

);

// export default () => {
//     return (
//         <div className="header">
//             <div className="header-title">this is the header</div>
//             <div className="header-greeting">hello, }  </div>

//         </div>
//     )
// };

// const f1 = () => null;
// const f1 = () => (null);
// const f1 = () => {return null};