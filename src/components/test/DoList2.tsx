import * as React from 'react';

interface Props {
    items: number[];
}

export default (props: Props) => (

    <div className="do-list2">
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