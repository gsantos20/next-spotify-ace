import React, { KeyboardEvent } from 'react'
import Header from '../components/header'
import Footer from '../components/footer'
import { GlobalSpotifyStyle } from '../styles/pages/spotify'

const Spotify: React.FC = () => {
  return (
    <>
      <GlobalSpotifyStyle />
      <Header/>

      <main>
        <div className="container">
          <div className="row justify-content-center m-4">
            <div className="col-12">
              <div className="border">
                <div className="card-body row align-items-center">
                  <div className="col-md-12 d-flex">
                    <input
                      className="form-control form-control-lg border-0"
                      id="searchBar"
                      type="search"
                      onKeyUp={handleKey}
                    />
                    <button className="btn btn-success m-1" id="searchBtn">
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-body">
          <div className="container content-parent d-flex justify-content-center align-items-center">
            <div className="spinner-border m-0" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  )

  function handleKey(e: KeyboardEvent) {
    if (e.which === 13) {
    }
    // getList();
  }
}

export default Spotify
