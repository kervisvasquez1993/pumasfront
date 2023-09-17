import React from "react";
import SliderThree from "../../UI/Slider/SliderThree";
import BasicSection from "../Basic/BasicSection";
import ReactMarkdown from "react-markdown";



const SlidetWithContent = ({ images, title, content }) => {
    return (
        <section className="container-section sm:p-10 sm:m-5">
            <section className="grid-2">
                <SliderThree>
                    {images?.map((image, index) => (
                        <div key={index}>
                            <img src={image.url} alt={`image-${index}`} />
                        </div>
                    ))}
                </SliderThree>
                <BasicSection
                    classNameTitle={"program-title fuenteTitulo colorPrimary"}
                    classNameWrapper={"setionStyleOne"}
                    title={title} // Usa el título pasado como prop
                    classNameContent={"fuentesParrafo p-5 sm:py-10"}
                >
                    <ReactMarkdown>{content}</ReactMarkdown>

                </BasicSection>
            </section>
        </section>
    );
};

export default SlidetWithContent;
