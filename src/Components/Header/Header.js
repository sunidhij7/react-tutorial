import React from "react";

function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__top">Welcome Abhimanyu</h1>
        <div className="header__warning">
          <div>
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke-width="0"></g>
              <g stroke-linecap="round" stroke-linejoin="round"></g>
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"
                  fill="rgb(99, 88, 222)"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            <p class="header__warning--text">
              You have one or more domains not complying with Google and Yahoo's
              new sender requirements. If you're using Brevo to send campaigns,
              we're here to guide you through the changes.&nbsp;
              <a href="link">
                Review your senders and take necessary actions for compliance.
              </a>
            </p>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
