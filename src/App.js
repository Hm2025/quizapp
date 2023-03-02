import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Timer from "./componets/Timer";
import Trivia from "./componets/Trivia";
import Start from "./componets/Start";

function App() {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");
  
  const data =[
    {
      id: 1,
      question: "Who formed the first political party in Nigeria?",
      answers:[
        {
          text: "Herbert Macauly",
          correct:true,
        },
        {
          text: "General Muhammad Buhari",
          correct:false,
        },
        {
        text: "Godwin Emefiele",
        correct:false,
        },
        {
          text:"George Akume",
          correct:false,
        },
      ],
    },
    {
      id: 2,
      question: "What was the first capital city in Nigeria?",
      answers:[
        {
          text: "Lagos",
          correct:false,
        },
        {
          text: "Abuja",
          correct:false,
        },
        {
        text: "Calabar",
        correct:true,
        },
        {
          text:"Jos",
          correct:false,
        },
      ],
    },
    {
      id: 3,
      question: "Who was the first woman to buy a car in Nigeria?",
      answers:[
        {
          text: "Mary Ben",
          correct:false,
        },
        {
          text: "Zainab Harun",
          correct:false,
        },
        {
        text: "Halimah Abdullah Alfa Csc",
        correct:false,
        },
        {
          text:"Funmilayo Ransome Kuti",
          correct:true,
        },
      ],
    },

    {
      id: 4,
      question: "What is the Full Meaning of NECON",
      answers:[
        {
          text: "Nigeria Electricity company of Nation",
          correct:false,
        },
        {
          text: "National Electronic Commission of Nigeria",
          correct:false,
        },
        {
        text: "National Election Commission of Nigeria",
        correct:true,
        },
        {
          text:"National Election commission of Nigerian's",
          correct:false,
        },
      ],
    },

    {
      id: 5,
      question: "What is the Full Meaning of IMF",
      answers:[
        {
          text: "International Money Fund",
          correct:false,
        },
        {
          text: "International Monetary Fund",
          correct:true,
        },
        {
        text: "International Momentum Fund",
        correct:false,
        },
        {
          text:"International Monitoring Fundation",
          correct:false,
        },
      ],
    },


    {
      id: 6,
      question: "What is the Full Meaning of NLC",
      answers:[
        {
          text: "Nigeria Lodage Congress",
          correct:false,
        },
        {
          text: "National Labour Congress",
          correct:false,
        },
        {
        text: "Nigeria Labour Congress",
        correct:true,
        },
        {
          text:"National Labour Commission",
          correct:false,
        },
      ],
    },


    {
      id: 7,
      question: "What is the Full Meaning of SARS",
      answers:[
        {
          text: "Special Anti Robbery Squard",
          correct:true,
        },
        {
          text: "Special Anti Ruling Squard",
          correct:false,
        },
        {
        text: "Special Anti Ranger Squard",
        correct:false,
        },
        {
          text:"Special Anti Ran Squard",
          correct:false,
        },
      ],
    },


    {
      id: 8,
      question: "What is the Full Meaning of NUPENG",
      answers:[
        {
          text: "National Union of Petroleum and National Gas",
          correct:false,
        },
        {
          text: "National Union of Petrol and Natural Gas",
          correct:false,
        },
        {
        text: "Nigeria Union of Petroleum and Natural Gas",
        correct:false,
        },
        {
          text:"National Union of Petroleum and Natural Gas",
          correct:true,
        },
      ],
    },

    {
      id: 9,
      question: "This game was developed by",
      answers:[
        {
          text: "Abdullahi. O. Usman Alfa Csc I",
          correct:false,
        },
        {
          text: "Zainab Haruna",
          correct:false,
        },
        {
        text: "Haruna Isah Danjuma",
        correct:true,
        },
        {
          text:"Yusuf Haliya",
          correct:false,
        },
      ],
    },

    {
      id: 10,
      question: "Who is Haruna Isah Danjuma?",
      answers:[
        {
          text: "A cyber Crime debugger",
          correct:false,
        },
        {
          text: "A lecturrer",
          correct:false,
        },
        {
        text: "A graphic desiger",
        correct:false,
        },
        {
          text:"A Full Stack software developer",
          correct:true,
        },
      ],
    },

    {
      id: 11,
      question: "What was the name of the first political party in Nigeria?",
      answers:[
        {
          text: "Nigeria National Political Party (NNPP)",
          correct:false,
        },
        {
          text: "All Progressoive Congress (APC)",
          correct:false,
        },
        {
        text: "Nigerian National Democratic Party (NNDP)",
        correct:true,
        },
        {
          text:"Nigeria Democratic Party (NDP)",
          correct:false,
        },
      ],
    },

    {
      id: 12,
      question: "What does the eagle represent in the Nigerian coat of arm?",
      answers:[
        {
          text: "Peace",
          correct:false,
        },
        {
          text: "Strength",
          correct:true,
        },
        {
        text: "Unity",
        correct:false,
        },
        {
          text:"Fetile Soil",
          correct:false,
        },
      ],
    },

    {
      id: 13,
      question: "What is the name of the first female vice-chancellor in Nigerian universities?",
      answers:[
        {
          text: "Grace Alele Willia",
          correct:false,
        },
        {
          text: "Grace Williams",
          correct:false,
        },
        {
        text: "Grace Alele Williams",
        correct:true,
        },
        {
          text:"Zainab Haruna",
          correct:false,
        },
      ],
    },

    {
      id: 14,
      question: "The Nigerian National flag was designed by who?",
      answers:[
        {
          text: "Micheal Taiwo Akinkumi",
          correct:false,
        },
        {
          text: "Micheal Taiwo Akinkunmi",
          correct:true,
        },
        {
        text: "Micheal Taiwo Akinwumi",
        correct:false,
        },
        {
          text:"Micheal Taiwo Ak",
          correct:false,
        },
      ],
    },

    {
      id: 15,
      question: "Auchi Twon is located in which state in Nigeria",
      answers:[
        {
          text: "Kano",
          correct:false,
        },
        {
          text: "Bauchi",
          correct:false,
        },
        {
        text: "Edo",
        correct:true,
        },
        {
          text:"Lagos",
          correct:false,
        },
      ],
    },
    
  ];

  const moneyPyramid = useMemo(() =>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),
  []
  );

  useEffect(()=>{
    questionNumber >1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber -1).amount);
  },[moneyPyramid, questionNumber]);
  return( 
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ? (<h1 className="endText">You earned:{earned}</h1> 
        ): (
          <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Trivia 
          data={data} 
          setStop={setStop}
          questionNumber ={questionNumber}
           setQuestionNumber={setQuestionNumber}/>
        </div>
        </>)}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) =>(
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem" }>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="monyListItemAmount">{m.amount}</span>
          </li>
          ))}  
        </ul>
      </div>
    
        </>
    ) : (
      <Start setUsername={setUsername}/>
      )}
    </div>
    );
   
}

export default App;
