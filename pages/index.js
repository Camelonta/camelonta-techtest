import Card from "../components/Card/Card"
import GlobalStyle from "../styles/GlobalStyle"
import { useEffect, useState } from "react"

import { Header } from "../components/Card/Header"
import { Footer } from "../components/Card/Footer"
import { CardsContainer } from "../styles/StyledCard"
import { Container } from "../styles/GeneralStyling"

export default function Index() {
  const [data, setData] = useState([])
  const test = { hej: "tjabba", hallå: "hejdå" }
  // // const hej = test.hej
  // const {hej, hallå} = test

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("/api/cards")
      const body = await data.json()
      setData(body)
      console.log("body", body)
    }
    fetchData()
  }, [])

  return (
    <>
      <Container>
        <Header />
        <CardsContainer>
          {data && data.map((card) => <Card card={card} test={test} />)}
        </CardsContainer>
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  )
}
