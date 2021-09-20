import React from "react";
import "./Css/home2.css";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const Home = () => {
  return (
    <div>
      {/* Google Tag Manager (noscript) */}
      <noscript>
        &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTLG55B"
        height="0" width="0"
        style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
      </noscript>
      {/* End Google Tag Manager (noscript) */}{" "}
      <div id="header">
        <div id="logo" className="logo">
          <a href="/home" title="jobOnline " rel="home">
            <h4 data-text="OnlineJOB">OnlineJOB</h4>
          </a>
        </div>

        <div id="navigation">
          <ul id="main-menu" className="menu" style={{fontSize:'16px',marginTop:'-55px'}}>
            <li
              id="menu-item-152"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-152"
            >
              <a href="./Register">Sign Up</a>
            </li>
            <li
              id="menu-item-646550"
              className="alt menu-item menu-item-type-custom menu-item-object-custom menu-item-646550"
            >
              <a href="./login">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="toggle-mobile-navigation" href="#">
        <i className="fa fa-bars" aria-hidden="true" />
      </div>
      <div id="banner" className=" title-large has-vacancy-button half-height">
        {/* <div class="parallax-slider"> */}

        <div className="background-image">
          <img
            src="https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-720x413.jpg"
            srcSet="https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full.jpg 1920w, https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-150x86.jpg 150w, https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-300x172.jpg 300w, https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-768x440.jpg 768w, https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-720x413.jpg 720w, https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-600x344.jpg 600w, https://nonstopconsulting.com/wp-content/uploads/Banner-Recruitment-Full-419x240.jpg 419w"
            alt=""
          />
        </div>
        <div style={{textAlign:'center'}}>
            <button style={{marginRight:'80px',fontSize:'25px'}}><a style={{color:'white'}} href="#Recruiter">Recruiter</a></button>
            <button  style={{fontSize:'25px'}}><a style={{color:'white'}} href="#Candidate">Candidate</a></button>

        </div>
      </div>
      <div id="more">
        <div
          id="sectors"
          className="section full-width bgd-white full-width default"
        >
          <div className="row has-1-cols">
            <div className="col">
              <h2 style={{ textAlign: "center" }}>
                <strong>Specialist Recruiters </strong>in Your Sector
              </h2>
              <div className="menu-sectors-container">
                <ul id="menu-sectors" className="menu">
                  <li
                    id="menu-item-33"
                    className="chemical menu-item menu-item-type-post_type menu-item-object-page menu-item-33"
                  >
                    <a
                      href="https://nonstopconsulting.com/en/chemical/"
                      className="menu-image-title-after menu-image-not-hovered"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://nonstopconsulting.com/wp-content/uploads/Icon-Chemical-2.png"
                        className="menu-image menu-image-title-after"
                        alt=""
                        loading="lazy"
                      />
                      <span className="menu-image-title-after menu-image-title">
                        Chemical
                      </span>
                    </a>
                  </li>
                  <li
                    id="menu-item-29"
                    className="digital menu-item menu-item-type-post_type menu-item-object-page menu-item-29"
                  >
                    <a
                      href="#"
                      className="menu-image-title-after menu-image-not-hovered"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://nonstopconsulting.com/wp-content/uploads/Icon-Digital-2-100x100.png"
                        className="menu-image menu-image-title-after"
                        alt=""
                        loading="lazy"
                      />
                      <span className="menu-image-title-after menu-image-title">
                        Digital
                      </span>
                    </a>
                  </li>
                  <li
                    id="menu-item-12396"
                    className="finance menu-item menu-item-type-post_type menu-item-object-page menu-item-12396"
                  >
                    <a
                      href=""
                      className="menu-image-title-after menu-image-not-hovered"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://nonstopconsulting.com/wp-content/uploads/Icon-Finance-1-100x100.png"
                        className="menu-image menu-image-title-after"
                        alt=""
                        loading="lazy"
                      />
                      <span className="menu-image-title-after menu-image-title">
                        Finance
                      </span>
                    </a>
                  </li>
                  <li
                    id="menu-item-30"
                    className="care menu-item menu-item-type-post_type menu-item-object-page menu-item-30"
                  >
                    <a
                      href=""
                      className="menu-image-title-after menu-image-not-hovered"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://nonstopconsulting.com/wp-content/uploads/Icon-Care-4-100x100.png"
                        className="menu-image menu-image-title-after"
                        alt=""
                        loading="lazy"
                      />
                      <span className="menu-image-title-after menu-image-title">
                        Health and Social Care
                      </span>
                    </a>
                  </li>
                  <li
                    id="menu-item-31"
                    className="pharma menu-item menu-item-type-post_type menu-item-object-page menu-item-31"
                  >
                    <a
                      href=""
                      className="menu-image-title-after menu-image-not-hovered"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://nonstopconsulting.com/wp-content/uploads/Icon-Pharma-3-100x100.png"
                        className="menu-image menu-image-title-after"
                        alt=""
                        loading="lazy"
                      />
                      <span className="menu-image-title-after menu-image-title">
                        Life Sciences
                      </span>
                    </a>
                  </li>
                  <li
                    id="menu-item-28"
                    className="technical menu-item menu-item-type-post_type menu-item-object-page menu-item-28"
                  >
                    <a
                      href="/"
                      className="menu-image-title-after menu-image-not-hovered"
                    >
                      <img
                        width={100}
                        height={100}
                        src="https://nonstopconsulting.com/wp-content/uploads/Icon-Technical-2-100x100.png"
                        className="menu-image menu-image-title-after"
                        alt=""
                        loading="lazy"
                      />
                      <span className="menu-image-title-after menu-image-title">
                        Technical
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          id="section-2"
          className="section stats no-padding has-background-image"
          style={{ Left: 0, Right: 0 }}
        >
          <div className="background-image">
            <img src srcSet alt="" />
          </div>
          <div className="row">
            <div className="col two_thirds alignbottom">
              <div className="row has-3-cols box dark">
                <div className="col aligncenter">
                  <span style={{ color: "#2088c5" }}>
                    <span className="counter">204</span>
                  </span>
                  Job Posted
                </div>
                <div className="col aligncenter">
                  <span style={{ color: "#2088c5" }}>
                    <span className="counter">1414</span>
                  </span>
                  Applies
                </div>
                <div className="col aligncenter">
                  <span style={{ color: "#2088c5" }}>
                    <span className="counter">2221</span>
                  </span>
                  Online Meeting Last year
                </div>
              </div>
            </div>
            <div
              className="col one_third white-text alignbottom"
              style={{ padding: "3% 2%", backgroundColor: "#124361" }}
            >
              <h2>
                <strong>OnlineJOB </strong> is an{" "}
                <strong>online meeting platform</strong>, to put directly in contact the recruiter and the candidate,{" "}
                <strong>join us to get your best experience and get your online meeting</strong>
              </h2>
            </div>
          </div>
        </div>
        <div id="testimonials" className="section slideshow padding">
          <div className="">
            <h2 style={{ textAlign: "center", width: "100%" }}>
              OnlineJob is the best solution for you to get a work if you are a candidate or to find a talented candidate in case you are 
              recruiter.
            </h2>
          </div>
        </div>

        <div id="vmap">
          <div id="overlay">
            <div id="Zug" className="office active">
              <img src="https://nonstopconsulting.com/wp-content/uploads/Zug_baarerstrasse_3.jpg" />
              <div className="text">
                <h5 className="caps">Zug</h5>
                <p>
                  JobOnline AG
                  <br />
                  24 Poststrasse
                  <br />
                  6300 Zug
                  <br />
                  Sousse
                  <br />
                  +216 00 33 44 15
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id='Candidate'>
          <h2 style={{textAlign:'center', color:'white'}}>A candidate has to follow this steps to get the chance to be hired</h2>
          <img style={{display:'block',margin:'auto', width:'50%',height:'50%'}} src='https://cdn.arc.dev/images/dev-landing/feature-img-3.png' alt='imgcandidate' />
      </div>
      {/* #more */}
      <div className="call-to-action">
        <div className="row" id='Recruiter'>
          <div className="col three_fifths">
            <h3 style={{ color: "white",textAlign:'center',fontSize: '1.71428571rem',marginTop:'90px'}}>
              As a Recruiter you should follow this steps to get the chance to find a talented Candidate
            </h3>
          </div>
          <div style={{zoom:'150%',marginTop:'120px'}}>
          <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Create an account</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="primary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Post a job </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Invite a candidate for a meeting </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" />
        </TimelineSeparator>
        <TimelineContent>Start online interview meeting</TimelineContent>
      </TimelineItem>
    </Timeline>
          </div>
        </div>
      </div>
      <a id="up" href="#header" className="button icon round">
        <i className="fa fa-angle-up" />
      </a>
      <div id="popup-login" className="popup" style={{ display: "none" }}>
        <div className="popup-inside">
          <div id="KA_LoginDiv" />
        </div>
      </div>
      <div id="KA_loader" style={{ display: "none" }}>
        <div className="loading">
          <i className="fa fa-circle-o-notch fa-spin fa-fw" />
        </div>
      </div>
      <p
        id="a11y-speak-intro-text"
        className="a11y-speak-intro-text"
        style={{
          position: "absolute",
          margin: "-1px",
          padding: 0,
          height: "1px",
          width: "1px",
          overflow: "hidden",
          clip: "rect(1px, 1px, 1px, 1px)",
          WebkitClipPath: "inset(50%)",
          clipPath: "inset(50%)",
          border: 0,
          wordWrap: "normal !important",
        }}
        hidden="hidden"
      >
        Notifications
      </p>
      <div
        id="a11y-speak-assertive"
        className="a11y-speak-region"
        style={{
          position: "absolute",
          margin: "-1px",
          padding: 0,
          height: "1px",
          width: "1px",
          overflow: "hidden",
          clip: "rect(1px, 1px, 1px, 1px)",
          WebkitClipPath: "inset(50%)",
          clipPath: "inset(50%)",
          border: 0,
          wordWrap: "normal !important",
        }}
        aria-live="assertive"
        aria-relevant="additions text"
        aria-atomic="true"
      />
      <div
        id="a11y-speak-polite"
        className="a11y-speak-region"
        style={{
          position: "absolute",
          margin: "-1px",
          padding: 0,
          height: "1px",
          width: "1px",
          overflow: "hidden",
          clip: "rect(1px, 1px, 1px, 1px)",
          WebkitClipPath: "inset(50%)",
          clipPath: "inset(50%)",
          border: 0,
          wordWrap: "normal !important",
        }}
        aria-live="polite"
        aria-relevant="additions text"
        aria-atomic="true"
      />
      <div style={{ display: "none", visibility: "hidden" }}>
        <noscript />
      </div>
      <noscript>
        &lt;img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=1248817765190405&amp;amp;ev=PageView&amp;amp;noscript=1"&gt;
      </noscript>
      <div>
        <div
          className="grecaptcha-badge"
          data-style="bottomright"
          style={{
            width: "256px",
            height: "60px",
            display: "block",
            transition: "right 0.3s ease 0s",
            position: "fixed",
            bottom: "14px",
            right: "-186px",
            boxShadow: "gray 0px 0px 5px",
            borderRadius: "2px",
            overflow: "hidden",
          }}
        >
          <div className="grecaptcha-logo">
            <iframe
              title="reCAPTCHA"
              src="https://www.google.com/recaptcha/api2/anchor?ar=2&k=6LcSKtIZAAAAANwd-_vIpsU3WvH6JK1ZMGYZscgx&co=aHR0cHM6Ly9ub25zdG9wY29uc3VsdGluZy5jb206NDQz&hl=fr&v=wxAi4AKLXL2kBAvXqI4XLSWS&size=invisible&cb=1pkdz39r0sit"
              width={256}
              height={60}
              role="presentation"
              name="a-h2bl51egtt94"
              frameBorder={0}
              scrolling="no"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
            />
          </div>
          <div className="grecaptcha-error" />
          <textarea
            id="g-recaptcha-response-100000"
            name="g-recaptcha-response"
            className="g-recaptcha-response"
            style={{
              width: "250px",
              height: "40px",
              border: "1px solid rgb(193, 193, 193)",
              margin: "10px 25px",
              padding: "0px",
              resize: "none",
              display: "none",
            }}
            defaultValue={""}
          />
        </div>
        <iframe style={{ display: "none" }} />
      </div>
      <iframe
        name="_hjRemoteVarsFrame"
        title="_hjRemoteVarsFrame"
        id="_hjRemoteVarsFrame"
        src="https://vars.hotjar.com/box-dfc01efbdc94bb0936d9a35a502b0b64.html"
        style={{
          display: "none !important",
          width: "1px !important",
          height: "1px !important",
          opacity: "0 !important",
          pointerEvents: "none !important",
        }}
      />
      <div id="copyright">
        <div className="menu-copyright-container">
          <ul id="menu-copyright" className="menu">
            <li
              id="menu-item-378"
              className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-2 current_page_item menu-item-378"
            >
              © 2021 jobOnline
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
