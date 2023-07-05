/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import {
  FooterProps,
  GlobalFooterStyle,
  TagFooter,
  FooterLink
} from '../styles/components/footer'

const Footer: React.FC = (props: FooterProps) => {
  return (
    <div>
      <GlobalFooterStyle />
      <TagFooter>
        <div className="row p-2 ds-flex w-100 h-100 justify-content-center align-items-center">
          <div className="col-md-6 fontMobile p-1 fz-3 text-center">
            <b>2023 ACE&copy; PLATFORM - V2</b>
          </div>
          <div className="col-md-6 fontMobile p-1 fz-3 text-center">
            <b>
              DEVELOPED WITH ❤ BY
              <FooterLink href="index">AceTeam</FooterLink>
              <i className="black bi bi-suit-spade-fill"></i>
            </b>
          </div>
        </div>
      </TagFooter>
    </div>
  )
}

export default Footer
