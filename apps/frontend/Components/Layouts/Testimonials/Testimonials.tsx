"use client";
import { useEffect, useRef, useState } from "react";
import { GenerateUi } from "@/utils/generate-ui/generate-ui";
import { text } from "./text";
import Section from "../../Stateless/Section/Section";
import classes from "./Testimonial.module.scss";
import Testimonial_Card, {
  ITestimonialCard,
} from "../../Stateless/Testimonial_Card/Testimonial_Card";
import Slider_Dots from "../../Stateless/Slider_Dots/Slider_Dots";

const temp_comment_data: ITestimonialCard[] = [
  {
    isActive: true,
    personName: "Aisha Malik",
    text: ' ""I owe my legal triumph to Mian Shafeeq! His brilliance in civil cases is unmatched. Sincere gratitude for his dedication."',
  },
  {
    personName: "Asif Malik",
    text: '"Mian Shafeeq legal prowes saved me from a criminal nightmare. A true ally in the courtroom. Highly recommend his services."',
  },
  {
    personName: "Farida Khan",
    text: "“Mian Shafeeq, a legal genius! His strategic mind won my civil case. Forever thankful. Best regards,”",
  },
  {
    personName: "Hassan Ali",
    text: "“In my darkest legal hour, Mian Shafeeq emerged as my guiding light. His expertise in criminal law is unmatched”",
  },
  {
    personName: "Saima Raza",
    text: "“Mian Shafeeq, a legal virtuoso! His meticulous handling of my civil case secured a victory. Truly grateful.”",
  },
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const commentRef = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);
  const [numberOfDots, setNumberOfDots] = useState(1);
  let numberOfCards: number;

  useEffect(() => {
    numberOfCards = getNumberOfitemToDisplay(containerRef, commentRef);
    setNumberOfDots(calculateNumberOfDots());
  }, []);

  useEffect(() => {
    slideSlider(count);
  }, [count]);

  function calculateNumberOfDots() {
    return Math.ceil(temp_comment_data.length / numberOfCards);
  }

  function slideSlider(slideNumber: number) {
    if (temp_comment_data.length === 0) return;
    const containerWidth = containerRef.current?.offsetWidth || 0;
    const sliderWidth = sliderRef.current?.offsetWidth || 0;
    const cardWidth = commentRef.current?.offsetWidth || 0;
    const cardMargin = commentRef.current?.style.marginRight || 0;
    const numberOfCardToMove = getNumberOfitemToDisplay(
      containerRef,
      commentRef
    );

    const valueOfTranslateX =
      cardWidth * (slideNumber * numberOfCardToMove) + (30 * slideNumber - 1);

    // if (containerWidth < sliderWidth) return;

    sliderRef.current?.style.setProperty(
      "transform",
      `translateX(-${Math.abs(valueOfTranslateX)}px)`
    );
  }

  function move_slider_right() {
    // slideSlider(count + 1);
    if (count >= numberOfDots - 1) return setCount(0);
    return setCount((prev) => prev + 1);
  }

  function move_slider_left() {
    if (count <= 0) return setCount(numberOfDots - 1);
    return setCount((prev) => prev - 1);
  }

  return (
    <div className={classes["testmonials"]}>
      <Section heading={text["heading"]} paragraph={text["paragraph"]}>
        <div className={classes["container"]} ref={containerRef}>
          <div className={classes["slider"]} ref={sliderRef}>
            {GenerateUi({
              RenderElement: Testimonial_Card,
              dataArr: temp_comment_data,
              childRef: commentRef,
            })}
          </div>
          <Slider_Dots
            count={count}
            dotsLength={numberOfDots}
            setCount={setCount}
            onClickLeftDot={move_slider_left}
            onClickRightDot={move_slider_right}
          />
        </div>
      </Section>
    </div>
  );
};

function getNumberOfitemToDisplay(sliderEl: any, productEl: any) {
  const numOfProductToDisplay = Math.floor(
    sliderEl.current.offsetWidth / productEl.current.offsetWidth
  );
  if (numOfProductToDisplay > 0) return numOfProductToDisplay;
  return 1;
}

export default Testimonials;
