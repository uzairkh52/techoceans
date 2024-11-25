import Image from "next/image";
import Script from 'next/script'
import Head from 'next/head';
import styles from "../../styles/sass/components/Header.module.scss"
import { Avatar, Grid, Container, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import classNames from "classnames";

const Footer = () => {
  
  return (
    <>
      <section className="white-bg">
        <Container maxWidth="">
          <Grid>
            <Grid item xs={12}>
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <Link
                      href={"/"}
                    >
                    <svg
                      width="242"
                      height="73"
                      viewBox="0 0 242 73"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M66 0.394531L66 72.3945Z" fill="white" />
                      <path
                        d="M66 0.394531L66 72.3945"
                        stroke="#FF4136"
                        stroke-width="1.76257"
                      />
                      <path
                        d="M44.7996 10.7891C41.4062 10.7891 38.6306 13.5651 38.6306 16.9581C38.6306 17.8217 38.8152 18.562 39.1237 19.3023L28.4517 29.9747C27.5876 29.5428 26.6623 29.2961 25.6752 29.2961C22.2823 29.2961 19.5062 32.0721 19.5062 35.4651C19.5062 38.858 22.2823 41.6341 25.6752 41.6341C26.8453 41.6286 27.9899 41.2915 28.9762 40.6618C29.9624 40.0322 30.7499 39.1357 31.2473 38.0765C31.7446 37.0174 31.9314 35.8389 31.786 34.6778C31.6406 33.5168 31.169 32.4207 30.4258 31.5169L40.5425 21.3997C41.6529 22.4489 43.1335 23.1271 44.7991 23.1271C48.1921 23.1271 50.9681 20.351 50.9681 16.9581C50.9681 13.5651 48.1921 10.7891 44.7991 10.7891M25.6752 39.1665C23.6399 39.1665 21.9738 37.5008 21.9738 35.4651C21.9738 33.4293 23.6399 31.7637 25.6752 31.7637C27.7106 31.7637 29.3766 33.4297 29.3766 35.4651C29.3766 37.5004 27.711 39.1665 25.6752 39.1665ZM44.7991 20.6595C42.7638 20.6595 41.0977 18.9938 41.0977 16.9581C41.0977 14.9223 42.7638 13.2567 44.7991 13.2567C46.8345 13.2567 48.5005 14.9227 48.5005 16.9581C48.5005 18.9934 46.8349 20.6595 44.7991 20.6595Z"
                        fill="#FF4136"
                      />
                      <path
                        d="M25.6757 23.1271C29.0683 23.1271 31.8447 20.351 31.8447 16.9581C31.8447 13.5651 29.0683 10.7891 25.6757 10.7891C22.2832 10.7891 19.5067 13.5651 19.5067 16.9581C19.5067 20.351 22.2824 23.1271 25.6757 23.1271ZM25.6757 13.2567C27.7111 13.2567 29.3771 14.9227 29.3771 16.9581C29.3771 18.9934 27.7111 20.6595 25.6757 20.6595C23.6404 20.6595 21.9743 18.9938 21.9743 16.9581C21.9743 14.9223 23.6395 13.2567 25.6757 13.2567ZM44.7996 29.2961C41.4063 29.2961 38.6306 32.0721 38.6306 35.4651C38.6306 38.858 41.4063 41.6341 44.7996 41.6341C48.193 41.6341 50.9686 38.858 50.9686 35.4651C50.9686 32.0721 48.1922 29.2961 44.7996 29.2961ZM44.7996 39.1665C42.7634 39.1665 41.0982 37.5008 41.0982 35.4651C41.0982 33.4293 42.7634 31.7637 44.7996 31.7637C46.8358 31.7637 48.501 33.4297 48.501 35.4651C48.501 37.5004 46.835 39.1665 44.7996 39.1665ZM6.55182 47.8031C3.15845 47.8031 0.382812 50.5791 0.382812 53.9721C0.382812 57.365 3.15845 60.1411 6.55182 60.1411C9.94519 60.1411 12.7208 57.365 12.7208 53.9721C12.7208 50.5791 9.94435 47.8031 6.55182 47.8031ZM6.55182 57.6735C4.51563 57.6735 2.85042 56.0079 2.85042 53.9721C2.85042 51.9363 4.51563 50.2707 6.55182 50.2707C8.58801 50.2707 10.2532 51.9367 10.2532 53.9721C10.2532 56.0074 8.58717 57.6735 6.55182 57.6735Z"
                        fill="#FF4136"
                      />
                      <path
                        d="M44.7996 47.8031C41.838 47.8031 39.3087 49.9005 38.7535 52.7383H31.7209C31.1656 49.9005 28.6363 47.8031 25.6752 47.8031C23.7628 47.8031 22.0355 48.6667 20.9251 50.086L10.7463 39.9684C11.5771 39.1985 12.1793 38.2142 12.4868 37.124C12.7942 36.0337 12.7949 34.8798 12.4888 33.7892C12.1827 32.6986 11.5816 31.7136 10.7517 30.9427C9.92178 30.1717 8.89528 29.6446 7.78513 29.4194V23.0037C10.6229 22.4485 12.7203 19.9192 12.7203 16.9581C12.7203 13.5651 9.94428 10.7891 6.55133 10.7891C3.15838 10.7891 0.382324 13.5651 0.382324 16.9581C0.382324 19.9192 2.47979 22.4485 5.31753 23.0037V29.4194C2.47979 29.9747 0.382324 32.5039 0.382324 35.4651C0.382324 38.858 3.15838 41.6341 6.55133 41.6341C7.29161 41.6341 7.97019 41.5107 8.58709 41.2639L19.6913 52.3681C19.5679 52.9233 19.5067 53.4173 19.5067 53.9721C19.5067 57.365 22.2823 60.1411 25.6757 60.1411C28.6364 60.1411 31.1656 58.0436 31.7209 55.2059H38.7535C39.3087 58.0436 41.838 60.1411 44.7991 60.1411C48.1921 60.1411 50.9681 57.365 50.9681 53.9721C50.9681 50.5791 48.1921 47.8031 44.7991 47.8031M2.84993 16.9581C2.84993 14.9227 4.51598 13.2567 6.55133 13.2567C8.58668 13.2567 10.2527 14.9227 10.2527 16.9581C10.2527 18.9934 8.5871 20.6595 6.55133 20.6595C4.51556 20.6595 2.84993 18.9938 2.84993 16.9581ZM2.84993 35.4651C2.84993 33.4297 4.51598 31.7637 6.55133 31.7637C8.58668 31.7637 10.2527 33.4297 10.2527 35.4651C10.2527 37.5004 8.5871 39.1665 6.55133 39.1665C4.51556 39.1665 2.84993 37.5008 2.84993 35.4651ZM25.6752 57.6735C23.6399 57.6735 21.9738 56.0079 21.9738 53.9721C21.9738 51.9363 23.6399 50.2707 25.6752 50.2707C27.7106 50.2707 29.3766 51.9367 29.3766 53.9721C29.3766 56.0074 27.711 57.6735 25.6752 57.6735ZM44.7991 57.6735C42.7638 57.6735 41.0977 56.0079 41.0977 53.9721C41.0977 51.9363 42.7638 50.2707 44.7991 50.2707C46.8345 50.2707 48.5005 51.9367 48.5005 53.9721C48.5005 56.0074 46.8349 57.6735 44.7991 57.6735Z"
                        fill="#FF4136"
                      />
                      <path
                        d="M88.3219 19.6766H84.419V28.4895C84.419 29.2169 84.5743 29.7303 84.8848 30.0296C85.1926 30.329 85.7284 30.4787 86.4922 30.4787H88.3219V32.5812H86.0851C84.703 32.5812 83.6664 32.2622 82.9754 31.6243C82.2844 30.9892 81.9388 29.9443 81.9388 28.4895V19.6766H80V17.6329H81.9388V13.8685H84.419V17.6329H88.3219V19.6766ZM104.957 24.5321C104.957 25.0049 104.929 25.5057 104.873 26.0345H92.9255C93.0178 27.5061 93.5229 28.6559 94.4405 29.4841C95.3582 30.3122 96.4717 30.7263 97.781 30.7263C98.8553 30.7263 99.7506 30.4759 100.467 29.9751C101.186 29.4743 101.691 28.8056 101.982 27.9691H104.655C104.255 29.4071 103.455 30.5766 102.255 31.4775C101.054 32.3755 99.5631 32.8246 97.781 32.8246C96.3625 32.8246 95.0938 32.507 93.9747 31.8719C92.8584 31.2341 91.9813 30.329 91.3434 29.1567C90.7083 27.9845 90.3908 26.6248 90.3908 25.0776C90.3908 23.5333 90.6999 22.1792 91.3182 21.0153C91.9365 19.8515 92.8038 18.9562 93.9201 18.3295C95.0392 17.7 96.3262 17.3853 97.781 17.3853C99.1994 17.3853 100.454 17.6944 101.545 18.3127C102.636 18.931 103.477 19.7815 104.068 20.8642C104.661 21.947 104.957 23.1696 104.957 24.5321ZM102.393 24.0159C102.393 23.0703 102.183 22.2561 101.764 21.5735C101.347 20.8908 100.779 20.3733 100.06 20.0207C99.3407 19.6654 98.5448 19.4878 97.6719 19.4878C96.4185 19.4878 95.3498 19.8878 94.4657 20.688C93.5844 21.4881 93.0808 22.5974 92.9549 24.0159H102.393ZM107.307 25.0776C107.307 23.5333 107.616 22.1834 108.235 21.0279C108.853 19.8725 109.712 18.9772 110.811 18.3421C111.911 17.7042 113.17 17.3853 114.588 17.3853C116.426 17.3853 117.94 17.8315 119.129 18.724C120.321 19.6137 121.108 20.8503 121.492 22.4338H118.819C118.564 21.5245 118.067 20.8055 117.329 20.2767C116.593 19.7508 115.679 19.4878 114.588 19.4878C113.17 19.4878 112.024 19.9746 111.151 20.9482C110.278 21.919 109.842 23.2955 109.842 25.0776C109.842 26.8794 110.278 28.2713 111.151 29.2533C112.024 30.2353 113.17 30.7263 114.588 30.7263C115.679 30.7263 116.589 30.4717 117.316 29.9625C118.044 29.4533 118.544 28.7259 118.819 27.7803H121.492C121.092 29.3078 120.292 30.5304 119.091 31.4481C117.891 32.3657 116.39 32.8246 114.588 32.8246C113.17 32.8246 111.911 32.507 110.811 31.8719C109.712 31.2341 108.853 30.3332 108.235 29.1693C107.616 28.0055 107.307 26.6416 107.307 25.0776ZM132.21 17.3601C133.337 17.3601 134.356 17.6007 135.265 18.0819C136.174 18.5631 136.888 19.2863 137.405 20.2516C137.926 21.214 138.186 22.3862 138.186 23.7683V32.5812H135.731V24.125C135.731 22.6338 135.357 21.4924 134.61 20.7006C133.866 19.9088 132.848 19.513 131.555 19.513C130.246 19.513 129.205 19.9228 128.433 20.7426C127.661 21.5595 127.275 22.7499 127.275 24.3139V32.5812H124.79V12.3955H127.275V19.7605C127.764 18.9968 128.441 18.405 129.306 17.9854C130.17 17.5685 131.138 17.3601 132.21 17.3601ZM148.765 32.8246C147.364 32.8246 146.095 32.507 144.959 31.8719C143.823 31.2341 142.932 30.329 142.286 29.1567C141.64 27.9845 141.317 26.6248 141.317 25.0776C141.317 23.5501 141.648 22.2002 142.311 21.0279C142.977 19.8557 143.882 18.9562 145.026 18.3295C146.173 17.7 147.456 17.3853 148.875 17.3853C150.293 17.3853 151.574 17.7 152.719 18.3295C153.866 18.9562 154.771 19.8515 155.434 21.0153C156.097 22.1792 156.428 23.5333 156.428 25.0776C156.428 26.6248 156.087 27.9845 155.405 29.1567C154.725 30.329 153.803 31.2341 152.639 31.8719C151.475 32.507 150.184 32.8246 148.765 32.8246ZM148.765 30.6423C149.655 30.6423 150.492 30.4339 151.275 30.017C152.056 29.5974 152.687 28.9693 153.168 28.1328C153.652 27.2962 153.894 26.2779 153.894 25.0776C153.894 23.8774 153.657 22.859 153.185 22.0225C152.712 21.186 152.093 20.5635 151.33 20.155C150.566 19.7465 149.738 19.5423 148.845 19.5423C147.936 19.5423 147.104 19.7465 146.348 20.155C145.596 20.5635 144.991 21.186 144.535 22.0225C144.082 22.859 143.855 23.8774 143.855 25.0776C143.855 26.2975 144.078 27.3256 144.523 28.1621C144.968 28.9987 145.563 29.6212 146.31 30.0296C147.055 30.4381 147.873 30.6423 148.765 30.6423ZM158.779 25.0776C158.779 23.5333 159.088 22.1834 159.706 21.0279C160.324 19.8725 161.183 18.9772 162.283 18.3421C163.385 17.7042 164.645 17.3853 166.064 17.3853C167.899 17.3853 169.413 17.8315 170.605 18.724C171.796 19.6137 172.583 20.8503 172.963 22.4338H170.29C170.035 21.5245 169.54 20.8055 168.804 20.2767C168.068 19.7508 167.155 19.4878 166.064 19.4878C164.645 19.4878 163.5 19.9746 162.627 20.9482C161.754 21.919 161.318 23.2955 161.318 25.0776C161.318 26.8794 161.754 28.2713 162.627 29.2533C163.5 30.2353 164.645 30.7263 166.064 30.7263C167.155 30.7263 168.064 30.4717 168.792 29.9625C169.519 29.4533 170.018 28.7259 170.29 27.7803H172.963C172.563 29.3078 171.763 30.5304 170.563 31.4481C169.362 32.3657 167.863 32.8246 166.064 32.8246C164.645 32.8246 163.385 32.507 162.283 31.8719C161.183 31.2341 160.324 30.3332 159.706 29.1693C159.088 28.0055 158.779 26.6416 158.779 25.0776ZM189.905 24.5321C189.905 25.0049 189.877 25.5057 189.821 26.0345H177.873C177.965 27.5061 178.47 28.6559 179.388 29.4841C180.306 30.3122 181.419 30.7263 182.729 30.7263C183.803 30.7263 184.698 30.4759 185.414 29.9751C186.133 29.4743 186.638 28.8056 186.929 27.9691H189.603C189.203 29.4071 188.402 30.5766 187.202 31.4775C186.002 32.3755 184.511 32.8246 182.729 32.8246C181.31 32.8246 180.041 32.507 178.922 31.8719C177.806 31.2341 176.929 30.329 176.291 29.1567C175.656 27.9845 175.338 26.6248 175.338 25.0776C175.338 23.5333 175.648 22.1792 176.266 21.0153C176.884 19.8515 177.751 18.9562 178.868 18.3295C179.987 17.7 181.274 17.3853 182.729 17.3853C184.147 17.3853 185.402 17.6944 186.493 18.3127C187.584 18.931 188.425 19.7815 189.015 20.8642C189.608 21.947 189.905 23.1696 189.905 24.5321ZM187.341 24.0159C187.341 23.0703 187.131 22.2561 186.711 21.5735C186.294 20.8908 185.726 20.3733 185.007 20.0207C184.288 19.6654 183.492 19.4878 182.619 19.4878C181.366 19.4878 180.297 19.8878 179.413 20.688C178.532 21.4881 178.028 22.5974 177.902 24.0159H187.341ZM192.251 25.0525C192.251 23.5249 192.56 22.1834 193.178 21.0279C193.796 19.8725 194.646 18.9772 195.725 18.3421C196.808 17.7042 198.014 17.3853 199.343 17.3853C200.652 17.3853 201.788 17.6679 202.751 18.233C203.716 18.7953 204.435 19.5046 204.908 20.3607V17.6329H207.417V32.5812H204.908V29.7988C204.415 30.6717 203.682 31.3949 202.709 31.9685C201.738 32.5392 200.606 32.8246 199.314 32.8246C197.987 32.8246 196.787 32.4972 195.713 31.8426C194.641 31.1879 193.796 30.2702 193.178 29.0896C192.56 27.9062 192.251 26.5604 192.251 25.0525ZM204.908 25.0776C204.908 23.9502 204.68 22.9681 204.224 22.1316C203.77 21.2951 203.156 20.6544 202.381 20.2096C201.609 19.7647 200.76 19.5423 199.834 19.5423C198.905 19.5423 198.059 19.7606 197.295 20.197C196.531 20.6334 195.923 21.2699 195.469 22.1064C195.013 22.943 194.785 23.925 194.785 25.0525C194.785 26.1967 195.013 27.1927 195.469 28.0404C195.923 28.8854 196.531 29.5302 197.295 29.9751C198.059 30.4199 198.905 30.6423 199.834 30.6423C200.76 30.6423 201.609 30.4199 202.381 29.9751C203.156 29.5302 203.77 28.8854 204.224 28.0404C204.68 27.1927 204.908 26.2051 204.908 25.0776ZM218.899 17.3601C220.718 17.3601 222.191 17.9098 223.318 19.0094C224.446 20.1089 225.009 21.6952 225.009 23.7683V32.5812H222.554V24.125C222.554 22.6338 222.182 21.4924 221.438 20.7006C220.691 19.9088 219.673 19.513 218.383 19.513C217.074 19.513 216.031 19.9228 215.256 20.7426C214.484 21.5595 214.098 22.7499 214.098 24.3139V32.5812H211.618V17.6329H214.098V19.7605C214.591 18.9968 215.259 18.405 216.104 17.9854C216.949 17.5685 217.881 17.3601 218.899 17.3601ZM234.368 32.8246C233.221 32.8246 232.193 32.6301 231.283 32.2412C230.374 31.8496 229.656 31.304 229.13 30.6046C228.602 29.9023 228.311 29.0966 228.257 28.1873H230.822C230.894 28.9343 231.244 29.5442 231.871 30.017C232.497 30.4898 233.32 30.7263 234.338 30.7263C235.284 30.7263 236.03 30.5164 236.575 30.0968C237.121 29.6799 237.393 29.1525 237.393 28.5147C237.393 27.86 237.103 27.3746 236.521 27.0584C235.939 26.7395 235.039 26.4247 233.822 26.1142C232.711 25.8232 231.806 25.5281 231.107 25.2287C230.408 24.9294 229.807 24.4845 229.307 23.8942C228.806 23.3011 228.555 22.5233 228.555 21.5609C228.555 20.7971 228.783 20.0963 229.24 19.4584C229.693 18.8233 230.338 18.3197 231.174 17.9476C232.011 17.5727 232.966 17.3853 234.04 17.3853C235.694 17.3853 237.03 17.8035 238.048 18.6401C239.067 19.4766 239.612 20.6222 239.685 22.0771H237.205C237.149 21.2965 236.834 20.6698 236.26 20.197C235.69 19.7242 234.922 19.4878 233.956 19.4878C233.067 19.4878 232.358 19.678 231.829 20.0585C231.303 20.4418 231.04 20.9426 231.04 21.5609C231.04 22.0505 231.198 22.4548 231.514 22.7737C231.833 23.0927 232.233 23.3472 232.714 23.5375C233.198 23.7277 233.867 23.9418 234.72 24.1796C235.795 24.4705 236.667 24.7573 237.339 25.0399C238.013 25.3196 238.591 25.7421 239.072 26.3072C239.553 26.8696 239.804 27.6054 239.823 28.5147C239.823 29.3344 239.595 30.0716 239.139 30.7263C238.686 31.3809 238.045 31.8943 237.217 32.2664C236.389 32.6385 235.439 32.8246 234.368 32.8246Z"
                        fill="#444444"
                      />
                      <path
                        d="M88.4192 51.2186C88.4192 51.9604 88.3192 52.6223 88.1193 53.2045C87.9241 53.7913 87.6432 54.2843 87.2766 54.6833C86.9101 55.0871 86.4649 55.3946 85.9413 55.6059C85.4224 55.8171 84.832 55.9228 84.1703 55.9228C83.5562 55.9228 82.9944 55.8171 82.485 55.6059C81.9756 55.3946 81.5353 55.0871 81.164 54.6833C80.7926 54.2843 80.5046 53.7913 80.2999 53.2045C80.1 52.6223 80 51.9604 80 51.2186C80 50.228 80.169 49.3853 80.507 48.6904C80.8497 47.9956 81.3377 47.4651 81.9709 47.0989C82.6041 46.7327 83.3586 46.5496 84.2346 46.5496C85.0677 46.5496 85.7985 46.7327 86.4269 47.0989C87.0553 47.4698 87.5432 48.0026 87.8907 48.6974C88.243 49.3923 88.4192 50.2327 88.4192 51.2186ZM81.4353 51.2186C81.4353 51.9463 81.5329 52.5754 81.7281 53.1059C81.9233 53.6411 82.2256 54.0542 82.635 54.3453C83.0397 54.6364 83.5633 54.7819 84.206 54.7819C84.8439 54.7819 85.3676 54.6364 85.777 54.3453C86.1864 54.0542 86.4887 53.6411 86.6839 53.1059C86.8791 52.5754 86.9767 51.9463 86.9767 51.2186C86.9767 50.4956 86.8791 49.8735 86.6839 49.3524C86.4887 48.8265 86.1864 48.4204 85.777 48.1341C85.3724 47.8477 84.8463 47.7045 84.1989 47.7045C83.242 47.7045 82.5422 48.0144 82.0994 48.6341C81.6567 49.2585 81.4353 50.12 81.4353 51.2186ZM94.489 55.9228C93.6654 55.9228 92.937 55.7538 92.3038 55.4158C91.6754 55.0824 91.1851 54.5707 90.8328 53.8806C90.4805 53.1951 90.3044 52.3289 90.3044 51.282C90.3044 50.1881 90.49 49.2937 90.8614 48.5989C91.2327 47.904 91.7445 47.3876 92.3967 47.0496C93.0489 46.7162 93.7915 46.5496 94.6246 46.5496C95.0817 46.5496 95.5244 46.5942 95.9528 46.6834C96.3765 46.7726 96.7265 46.8876 97.0026 47.0284L96.5813 48.1763C96.3051 48.0636 95.9838 47.9627 95.6172 47.8735C95.2507 47.789 94.9079 47.7467 94.5889 47.7467C93.9558 47.7467 93.4273 47.8806 93.0036 48.1482C92.5847 48.4158 92.2705 48.8125 92.0611 49.3383C91.8516 49.8594 91.7469 50.5026 91.7469 51.2679C91.7469 52.0003 91.8492 52.6247 92.0539 53.1411C92.2539 53.6575 92.5561 54.0519 92.9608 54.3242C93.3654 54.5965 93.8725 54.7326 94.4818 54.7326C94.9674 54.7326 95.4054 54.681 95.7958 54.5777C96.1861 54.4791 96.5408 54.3618 96.8598 54.2256V55.4439C96.5503 55.5988 96.2076 55.7162 95.8315 55.796C95.4554 55.8805 95.0079 55.9228 94.489 55.9228ZM102.565 46.5496C103.346 46.5496 104.015 46.7186 104.572 47.0566C105.129 47.3993 105.557 47.8782 105.857 48.4932C106.152 49.1035 106.3 49.8195 106.3 50.6411V51.4932H99.9661C99.9803 52.5543 100.247 53.3618 100.766 53.9158C101.285 54.4744 102.016 54.7538 102.958 54.7538C103.539 54.7538 104.053 54.6998 104.501 54.5918C104.943 54.4885 105.405 54.3359 105.886 54.1341V55.3383C105.424 55.5401 104.965 55.688 104.508 55.7819C104.055 55.8758 103.52 55.9228 102.901 55.9228C102.02 55.9228 101.251 55.7444 100.594 55.3876C99.9375 55.0355 99.4281 54.5143 99.0663 53.8242C98.7045 53.1388 98.5236 52.2984 98.5236 51.3031C98.5236 50.3265 98.6902 49.4815 99.0235 48.7679C99.352 48.059 99.8209 47.512 100.43 47.127C101.035 46.742 101.747 46.5496 102.565 46.5496ZM102.551 47.6693C101.808 47.6693 101.216 47.9087 100.773 48.3876C100.335 48.8664 100.073 49.5355 99.9875 50.3946H104.843C104.839 49.8547 104.753 49.3805 104.586 48.9721C104.42 48.5589 104.17 48.2397 103.836 48.0144C103.503 47.7843 103.075 47.6693 102.551 47.6693ZM112.084 46.5637C113.174 46.5637 113.986 46.8054 114.519 47.289C115.048 47.7725 115.312 48.5449 115.312 49.6059V55.7538H114.298L114.034 54.4228H113.962C113.705 54.7514 113.439 55.0261 113.163 55.2468C112.882 55.4721 112.558 55.6411 112.191 55.7538C111.83 55.8665 111.382 55.9228 110.849 55.9228C110.292 55.9228 109.797 55.8266 109.364 55.6341C108.93 55.4416 108.59 55.1505 108.342 54.7608C108.095 54.3665 107.971 53.8711 107.971 53.2749C107.971 52.3735 108.335 51.6787 109.064 51.1904C109.787 50.7068 110.892 50.4439 112.377 50.4017L113.955 50.3383V49.782C113.955 49.0026 113.786 48.4557 113.448 48.1411C113.105 47.8266 112.625 47.6693 112.006 47.6693C111.525 47.6693 111.068 47.7373 110.635 47.8735C110.197 48.0143 109.782 48.1763 109.392 48.3594L108.971 47.3242C109.38 47.113 109.854 46.9345 110.392 46.789C110.925 46.6388 111.489 46.5637 112.084 46.5637ZM113.941 52.1341V51.3031L112.541 51.3594C111.399 51.4017 110.592 51.5848 110.121 51.9087C109.654 52.2373 109.421 52.6974 109.421 53.289C109.421 53.8054 109.58 54.1881 109.899 54.4369C110.218 54.6857 110.639 54.8101 111.163 54.8101C111.977 54.8101 112.644 54.5871 113.163 54.1411C113.681 53.6951 113.941 53.0261 113.941 52.1341ZM122.524 46.5496C123.61 46.5496 124.433 46.8125 124.995 47.3383C125.552 47.8594 125.831 48.7021 125.831 49.8665V55.7538H124.46V49.958C124.46 49.2022 124.283 48.6364 123.931 48.2608C123.584 47.8899 123.05 47.7045 122.332 47.7045C121.317 47.7045 120.603 47.9862 120.189 48.5496C119.775 49.1176 119.568 49.9416 119.568 51.0214V55.7538H118.183V46.7115H119.304L119.511 48.0144H119.589C119.785 47.6951 120.032 47.4275 120.332 47.2115C120.632 46.9956 120.97 46.8312 121.346 46.7186C121.717 46.6059 122.11 46.5496 122.524 46.5496ZM141.041 51.2186C141.041 51.9604 140.943 52.6223 140.748 53.2045C140.553 53.7913 140.272 54.2843 139.905 54.6833C139.539 55.0871 139.094 55.3946 138.57 55.6059C138.051 55.8171 137.461 55.9228 136.799 55.9228C136.185 55.9228 135.623 55.8171 135.114 55.6059C134.604 55.3946 134.164 55.0871 133.793 54.6833C133.421 54.2843 133.133 53.7913 132.929 53.2045C132.729 52.6223 132.629 51.9604 132.629 51.2186C132.629 50.228 132.798 49.3853 133.136 48.6904C133.474 47.9956 133.959 47.4651 134.593 47.0989C135.23 46.7327 135.985 46.5496 136.856 46.5496C137.694 46.5496 138.427 46.7327 139.056 47.0989C139.684 47.4698 140.172 48.0026 140.52 48.6974C140.867 49.3923 141.041 50.2327 141.041 51.2186ZM134.064 51.2186C134.064 51.9463 134.162 52.5754 134.357 53.1059C134.552 53.6411 134.854 54.0542 135.264 54.3453C135.668 54.6364 136.192 54.7819 136.835 54.7819C137.473 54.7819 137.996 54.6364 138.406 54.3453C138.815 54.0542 139.118 53.6411 139.313 53.1059C139.508 52.5754 139.605 51.9463 139.605 51.2186C139.605 50.4956 139.508 49.8735 139.313 49.3524C139.118 48.8265 138.815 48.4204 138.406 48.1341C138.001 47.8477 137.475 47.7045 136.828 47.7045C135.871 47.7045 135.171 48.0144 134.728 48.6341C134.285 49.2585 134.064 50.12 134.064 51.2186ZM147.532 46.7115V47.7819H145.247V55.7538H143.854V47.7819H142.233V47.127L143.854 46.6693V46.0707C143.854 45.3101 143.969 44.6927 144.197 44.2186C144.426 43.7397 144.759 43.3876 145.197 43.1622C145.63 42.9369 146.158 42.8242 146.782 42.8242C147.134 42.8242 147.458 42.8547 147.753 42.9158C148.044 42.9768 148.301 43.0449 148.524 43.12L148.167 44.2045C147.977 44.1434 147.763 44.0871 147.525 44.0355C147.287 43.9838 147.046 43.958 146.804 43.958C146.27 43.958 145.878 44.127 145.625 44.4651C145.373 44.8031 145.247 45.3313 145.247 46.0496V46.7115H147.532ZM156.629 54.8031C156.863 54.8031 157.098 54.7819 157.336 54.7397C157.574 54.7021 157.77 54.6552 157.922 54.5988V55.6693C157.76 55.7397 157.536 55.7984 157.251 55.8453C156.96 55.897 156.679 55.9228 156.408 55.9228C155.923 55.9228 155.482 55.8383 155.087 55.6693C154.687 55.5003 154.371 55.2162 154.137 54.8171C153.899 54.4134 153.78 53.8571 153.78 53.1481V47.7819H152.473V47.12L153.787 46.5777L154.337 44.6129H155.18V46.7115H157.865V47.7819H155.18V53.1059C155.18 53.674 155.311 54.0988 155.573 54.3805C155.839 54.6622 156.192 54.8031 156.629 54.8031ZM163.306 46.5496C164.087 46.5496 164.756 46.7186 165.313 47.0566C165.87 47.3993 166.296 47.8782 166.591 48.4932C166.886 49.1035 167.034 49.8195 167.034 50.6411V51.4932H160.7C160.719 52.5543 160.988 53.3618 161.507 53.9158C162.026 54.4744 162.756 54.7538 163.699 54.7538C164.28 54.7538 164.792 54.6998 165.234 54.5918C165.682 54.4885 166.146 54.3359 166.627 54.1341V55.3383C166.165 55.5401 165.706 55.688 165.249 55.7819C164.796 55.8758 164.258 55.9228 163.635 55.9228C162.754 55.9228 161.988 55.7444 161.335 55.3876C160.678 55.0355 160.169 54.5143 159.807 53.8242C159.445 53.1388 159.264 52.2984 159.264 51.3031C159.264 50.3265 159.429 49.4815 159.757 48.7679C160.09 48.059 160.559 47.512 161.164 47.127C161.769 46.742 162.483 46.5496 163.306 46.5496ZM163.285 47.6693C162.542 47.6693 161.952 47.9087 161.514 48.3876C161.071 48.8664 160.809 49.5355 160.728 50.3946H165.577C165.572 49.8547 165.489 49.3805 165.327 48.9721C165.161 48.5589 164.911 48.2397 164.577 48.0144C164.239 47.7843 163.809 47.6693 163.285 47.6693ZM173.068 55.9228C172.244 55.9228 171.516 55.7538 170.883 55.4158C170.254 55.0824 169.764 54.5707 169.412 53.8806C169.059 53.1951 168.883 52.3289 168.883 51.282C168.883 50.1881 169.069 49.2937 169.44 48.5989C169.812 47.904 170.323 47.3876 170.976 47.0496C171.628 46.7162 172.371 46.5496 173.204 46.5496C173.661 46.5496 174.103 46.5942 174.532 46.6834C174.956 46.7726 175.305 46.8876 175.582 47.0284L175.16 48.1763C174.884 48.0636 174.563 47.9627 174.196 47.8735C173.83 47.789 173.487 47.7467 173.168 47.7467C172.535 47.7467 172.006 47.8806 171.583 48.1482C171.164 48.4158 170.849 48.8125 170.64 49.3383C170.431 49.8594 170.326 50.5026 170.326 51.2679C170.326 52.0003 170.428 52.6247 170.633 53.1411C170.833 53.6575 171.135 54.0519 171.54 54.3242C171.944 54.5965 172.451 54.7326 173.061 54.7326C173.546 54.7326 173.984 54.681 174.375 54.5777C174.765 54.4791 175.12 54.3618 175.439 54.2256V55.4439C175.129 55.5988 174.787 55.7162 174.41 55.796C174.034 55.8805 173.587 55.9228 173.068 55.9228ZM177.602 42.9228H178.995V46.7608C178.995 46.9815 178.99 47.2021 178.981 47.4228C178.966 47.6481 178.945 47.8547 178.916 48.0425H179.009C179.2 47.7233 179.442 47.4533 179.738 47.2327C180.028 47.0167 180.361 46.8524 180.737 46.7397C181.109 46.627 181.504 46.5707 181.923 46.5707C182.661 46.5707 183.275 46.6857 183.765 46.9158C184.26 47.1458 184.632 47.5049 184.879 47.9932C185.127 48.4768 185.25 49.1036 185.25 49.8735V55.7608H183.879V49.9651C183.879 49.2092 183.706 48.6435 183.358 48.2679C183.011 47.897 182.477 47.7115 181.758 47.7115C181.078 47.7115 180.535 47.8383 180.13 48.0918C179.726 48.35 179.435 48.7256 179.259 49.2186C179.083 49.7162 178.995 50.3218 178.995 51.0355V55.7608H177.602V42.9228ZM192.463 46.5496C193.553 46.5496 194.377 46.8125 194.934 47.3383C195.491 47.8594 195.769 48.7021 195.769 49.8665V55.7538H194.398V49.958C194.398 49.2022 194.224 48.6364 193.877 48.2608C193.529 47.8899 192.994 47.7045 192.27 47.7045C191.256 47.7045 190.542 47.9862 190.128 48.5496C189.718 49.1176 189.514 49.9416 189.514 51.0214V55.7538H188.121V46.7115H189.242L189.456 48.0144H189.528C189.723 47.6951 189.971 47.4275 190.27 47.2115C190.575 46.9956 190.913 46.8312 191.284 46.7186C191.661 46.6059 192.053 46.5496 192.463 46.5496ZM206.538 51.2186C206.538 51.9604 206.44 52.6223 206.245 53.2045C206.045 53.7913 205.762 54.2843 205.395 54.6833C205.028 55.0871 204.583 55.3946 204.06 55.6059C203.541 55.8171 202.95 55.9228 202.289 55.9228C201.675 55.9228 201.113 55.8171 200.603 55.6059C200.094 55.3946 199.654 55.0871 199.282 54.6833C198.911 54.2843 198.623 53.7913 198.418 53.2045C198.218 52.6223 198.118 51.9604 198.118 51.2186C198.118 50.228 198.287 49.3853 198.625 48.6904C198.968 47.9956 199.456 47.4651 200.089 47.0989C200.722 46.7327 201.477 46.5496 202.353 46.5496C203.186 46.5496 203.917 46.7327 204.545 47.0989C205.174 47.4698 205.662 48.0026 206.009 48.6974C206.361 49.3923 206.538 50.2327 206.538 51.2186ZM199.554 51.2186C199.554 51.9463 199.651 52.5754 199.846 53.1059C200.042 53.6411 200.344 54.0542 200.753 54.3453C201.158 54.6364 201.682 54.7819 202.324 54.7819C202.962 54.7819 203.486 54.6364 203.895 54.3453C204.305 54.0542 204.607 53.6411 204.802 53.1059C204.998 52.5754 205.095 51.9463 205.095 51.2186C205.095 50.4956 204.998 49.8735 204.802 49.3524C204.607 48.8265 204.305 48.4204 203.895 48.1341C203.491 47.8477 202.965 47.7045 202.317 47.7045C201.365 47.7045 200.665 48.0144 200.218 48.6341C199.775 49.2585 199.554 50.12 199.554 51.2186ZM210.337 42.9228V55.7608H208.937V42.9228H210.337ZM221.169 51.2186C221.169 51.9604 221.072 52.6223 220.877 53.2045C220.681 53.7913 220.401 54.2843 220.034 54.6833C219.663 55.0871 219.217 55.3946 218.699 55.6059C218.175 55.8171 217.585 55.9228 216.928 55.9228C216.314 55.9228 215.752 55.8171 215.242 55.6059C214.733 55.3946 214.293 55.0871 213.921 54.6833C213.55 54.2843 213.262 53.7913 213.057 53.2045C212.853 52.6223 212.75 51.9604 212.75 51.2186C212.75 50.228 212.922 49.3853 213.264 48.6904C213.602 47.9956 214.088 47.4651 214.721 47.0989C215.354 46.7327 216.109 46.5496 216.985 46.5496C217.823 46.5496 218.556 46.7327 219.184 47.0989C219.813 47.4698 220.301 48.0026 220.648 48.6974C220.996 49.3923 221.169 50.2327 221.169 51.2186ZM214.193 51.2186C214.193 51.9463 214.29 52.5754 214.485 53.1059C214.681 53.6411 214.981 54.0542 215.385 54.3453C215.795 54.6364 216.321 54.7819 216.963 54.7819C217.597 54.7819 218.118 54.6364 218.527 54.3453C218.941 54.0542 219.246 53.6411 219.441 53.1059C219.636 52.5754 219.734 51.9463 219.734 51.2186C219.734 50.4956 219.636 49.8735 219.441 49.3524C219.246 48.8265 218.944 48.4204 218.534 48.1341C218.125 47.8477 217.599 47.7045 216.956 47.7045C215.999 47.7045 215.299 48.0144 214.857 48.6341C214.414 49.2585 214.193 50.12 214.193 51.2186ZM226.132 59.8242C224.928 59.8242 224 59.6036 223.347 59.1622C222.695 58.7162 222.369 58.0942 222.369 57.296C222.369 56.7327 222.55 56.2491 222.912 55.8453C223.278 55.4463 223.785 55.181 224.433 55.0496C224.195 54.9369 223.99 54.7702 223.819 54.5495C223.647 54.3289 223.562 54.0754 223.562 53.789C223.562 53.4604 223.657 53.1716 223.847 52.9228C224.033 52.6693 224.319 52.4275 224.704 52.1975C224.223 52.005 223.833 51.6787 223.533 51.2186C223.233 50.7632 223.083 50.228 223.083 49.613C223.083 48.9651 223.221 48.411 223.497 47.951C223.769 47.4909 224.164 47.1411 224.683 46.9017C225.202 46.6575 225.83 46.5355 226.568 46.5355C226.73 46.5355 226.894 46.5425 227.061 46.5566C227.222 46.5707 227.38 46.5895 227.532 46.613C227.679 46.6411 227.81 46.6716 227.925 46.7045H231.067V47.5848L229.381 47.789C229.548 48.005 229.686 48.2655 229.796 48.5707C229.91 48.8711 229.967 49.2068 229.967 49.5777C229.967 50.4791 229.658 51.1951 229.039 51.7256C228.42 52.2561 227.568 52.5214 226.482 52.5214C226.225 52.5214 225.963 52.5003 225.697 52.458C225.425 52.6036 225.218 52.7679 225.075 52.951C224.933 53.1341 224.861 53.343 224.861 53.5777C224.861 53.7514 224.916 53.8923 225.025 54.0003C225.135 54.1036 225.292 54.1787 225.497 54.2256C225.701 54.2726 225.949 54.296 226.239 54.296H227.853C228.853 54.296 229.619 54.5026 230.153 54.9157C230.686 55.3289 230.952 55.9298 230.952 56.7186C230.952 57.7233 230.541 58.4909 229.717 59.0214C228.889 59.5566 227.694 59.8242 226.132 59.8242ZM226.175 58.7538C226.932 58.7538 227.56 58.6763 228.06 58.5214C228.56 58.3711 228.934 58.1552 229.182 57.8735C229.429 57.5918 229.553 57.2538 229.553 56.8594C229.553 56.4979 229.469 56.2256 229.303 56.0425C229.136 55.8547 228.891 55.7303 228.567 55.6693C228.244 55.6082 227.849 55.5777 227.382 55.5777H225.79C225.375 55.5777 225.016 55.6388 224.711 55.7608C224.402 55.8876 224.166 56.0754 224.004 56.3242C223.838 56.573 223.754 56.8805 223.754 57.2467C223.754 57.7397 223.964 58.1129 224.383 58.3665C224.802 58.6247 225.399 58.7538 226.175 58.7538ZM226.532 51.5214C227.199 51.5214 227.699 51.3571 228.032 51.0284C228.365 50.6998 228.532 50.2186 228.532 49.5848C228.532 48.9087 228.363 48.4017 228.025 48.0637C227.682 47.7209 227.18 47.5495 226.518 47.5495C225.88 47.5495 225.39 47.7256 225.047 48.0777C224.704 48.4251 224.533 48.9345 224.533 49.6059C224.533 50.2256 224.707 50.6998 225.054 51.0284C225.402 51.3571 225.894 51.5214 226.532 51.5214ZM235.101 55.7749L231.431 46.7115H232.916L234.944 51.958C235.063 52.2679 235.173 52.5636 235.273 52.8453C235.373 53.1317 235.461 53.404 235.537 53.6623C235.618 53.9205 235.68 54.1693 235.723 54.4087H235.78C235.861 54.1364 235.973 53.7749 236.115 53.3242C236.263 52.8782 236.42 52.4204 236.587 51.9509L238.5 46.7115H240L236.008 57.0848C235.794 57.6435 235.546 58.127 235.266 58.5355C234.985 58.9486 234.644 59.2679 234.244 59.4932C233.84 59.7139 233.354 59.8242 232.788 59.8242C232.526 59.8242 232.293 59.8101 232.088 59.782C231.888 59.7491 231.717 59.7139 231.574 59.6763V58.5777C231.697 58.6059 231.845 58.6317 232.016 58.6552C232.193 58.674 232.376 58.6833 232.566 58.6833C232.914 58.6833 233.214 58.62 233.466 58.4932C233.723 58.3618 233.942 58.174 234.123 57.9299C234.309 57.681 234.468 57.3852 234.601 57.0425L235.101 55.7749Z"
                        fill="#444444"
                      />
                    </svg>
                    </Link>
                      
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div>
                    <Link
                        className={styles.enterbutton + " btn button ui btn-white btn-md align-center"}
                        href={"https://wa.me/03472696576?text=please%20visit%20our%20facebook%20page%20for%20more%20detail%20you%20want%20to%20purchase%20anything%20just%20message%20inbox%20on%20whatsapp%20chat%20or%20call%20we%20will%20response%20quick%0Ahttps://www.facebook.com/profile.php?id=61568919442130"}
                      >
                        Call now
                      </Link>
                  </div>
                  <div>
                    <Link
                        className={styles.enterbutton + " btn button ui btn-white btn-md align-center"}
                        href={"/contact"}
                      >
                        Contact Us
                      </Link>
                  </div>
                  <div>
                    <Link
                        className={styles.enterbutton + " btn button ui btn-white btn-md align-center"}
                        href={"/blog"}
                      >
                        Blogs
                      </Link>
                  </div>
                  <div>
                    <Link
                        className={styles.enterbutton + " btn button ui btn-white btn-md align-center"}
                        href={"/about"}
                      >
                        About
                      </Link>
                  </div>
                </div>
                  {/*  */}
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Footer;