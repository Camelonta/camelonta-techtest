import { FooterText } from "../../styles/FooterStyling"

export const Footer = () => {
  return (
    <FooterText>
      <span> Made by Emma for </span>
      <a href="https://camelonta.se/">
        <img
          className="logo"
          src="https://i.postimg.cc/qq3JyDpW/camelonta-removebg-preview.png"
        />
      </a>
    </FooterText>
  )
}
