import { Fade, Slide } from "react-awesome-reveal";
const SectionTitle = ({heading, subHeading}) => {
    return (    <>
        <Slide className="mx-auto text-center md:w-4/12 my-8">
         <h3 className="font-mono text-4xl uppercase border-y-4 py-4">{heading}</h3>
        </Slide>
        <Fade delay={1e3} cascade damping={1e-1}>
            <p className="text-yellow-600 text-center mb-2 my-8">--- {subHeading} ---</p>
          
        </Fade>
      </>
       
    );
};

export default SectionTitle;