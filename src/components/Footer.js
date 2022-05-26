import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import BusinessSharpIcon from '@mui/icons-material/BusinessSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import CallSharpIcon from '@mui/icons-material/CallSharp';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          {/* <span>Get connected with us on social networks:</span> */}
        </div>
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>LuckyGTransport
              </h6>
              <p>
              Committed in providing you excellent cheap van and car rental in Manila, Quezon City, Philippines. We provide you flexible offerings including transfer services, car rental, airport transfer, long and short term leases with the option of hiring driver or self drive. 
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
              <p>
                <a href="/fleet" className='text-reset'>
                  Fleet
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Promos
                </a>
              </p>
              <p>
                <a href="/reservation" className='text-reset'>
                  Reservation
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href="/fleet" className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href="/about" className='text-reset'>
                  About
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <BusinessSharpIcon/> 54A/78 Hauck Island Apt.937, Poblacion, Tabuk 1692 Metro Manila
              </p>
              <p>
                <EmailSharpIcon/>
                 LuckyG_transport@gmail.com
              </p>
              <p>
                <CallSharpIcon/> +63 817 839 2992
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='#'>
          LuckyGTransport
        </a>
      </div>
    </MDBFooter>
  );
}
