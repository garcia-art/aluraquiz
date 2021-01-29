import styled from 'styled-components';
import React from 'react';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizLogo from '../src/components/QuizLogo';

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;

// const BackgroundImage = styled.div`
//    background-image: url(${db.bg});
//    flex: 1;
//    background-size: cover;
//    background-position: center;

// `;

// não é React, é JS puro
const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (

    <QuizBackground backgroundImage={db.bg}>

      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);
              // router manda para próxima página
            }}
            >
              <input
                onChange={function (infosDoEvento) {
                  // name = infosDoEvento.target.value;
                  setName(infosDoEvento.target.value);
                  // State
                }}
                placeholder="Coloque seu nome, vassalo! "
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {' '}
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Header>
            <h1>Quizes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Quizes da Galera</h1>
            <p>Lorem ipsum popoppop</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/garcia-art/aluraquiz" />
    </QuizBackground>
  );
}
