import { Helmet } from 'react-helmet';

const Title = ({ title}) => {
    return (
        <div>
            <Helmet>
                <title>{title}</title>
            </Helmet>
           
        </div>
    );
};

export default Title;