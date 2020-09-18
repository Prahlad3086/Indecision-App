import React from 'react';

// stateless functional component ---> It automatically call render function
const Header = (props)=> (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            { props.subTitle && <h2 className="header__subtitle">{props.subTitle}</h2> }
        </div>
    </div>
);

// class Header extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subTitle}</h2>
//             </div>
//         );
//     }
// };

Header.defaultProps = {
    title : 'Indecision'
}

export default Header;