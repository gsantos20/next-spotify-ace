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
    <>
      <GlobalFooterStyle />
      <TagFooter>
        <div className="row p-2 ds-flex w-100 h-100 justify-content-center align-items-center">
          <div className="col-6 fs-7 text-center">
            <b>2023 ACE&copy; PLATFORM - V2</b>
          </div>
          <div className="col-6 fs-6 text-center">
            <b>
              DEVELOPED WITH
              <i className="text-danger bi bi-suit-heart-fill"> </i>
              BY&nbsp;
              <FooterLink
                href="https://www.instagram.com/guuztta"
                target="_blank"
              >
                visk
              </FooterLink>
              &nbsp;
              <i className="text-black bi bi-suit-spade-fill"></i>
            </b>
          </div>
        </div>
      </TagFooter>
    </>
  )
}

export default Footer
