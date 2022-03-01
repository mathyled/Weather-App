import React from "react";
import style from "./About.module.css";

export default function About({ name }) {
    return (
        <div className={style.root} >
            <h3> Hi!👋 I am {name} </h3>
            <h4>I am a Full Stack Developer from Argentina enthusiastic about current technologies 💻
            </h4>
            <h4>Born learner, always looking for new learning experiences to improve my knowledge and be able to contribute my grain of sand to this beautiful IT world 🚀</h4>
            <h4>This app is made with ❤️ with the following tech skills</h4>
            <h3>JavaScript</h3>
            <h3>React</h3>
            <h3>CSS</h3>
            <h3>Sweetalert2</h3>

        </div>
    )
};