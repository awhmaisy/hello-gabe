'use client';

import Image from "next/image";

export default function Home() {
  return (
    <div style={{ 
      backgroundColor: '#fff',
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      padding: '20px'
    }}>
      <div style={{ 
        maxWidth: '600px',
        margin: '0 auto',
        paddingBottom: '50px'
      }}>
        <div style={{ 
          width: '100%', 
          textAlign: 'center', 
          marginBottom: '15px',
          fontFamily: 'Times New Roman, serif'
        }}>
          <h1 style={{ 
            fontSize: '28px', 
            fontWeight: 'bold',
            color: '#333',
            margin: '0',
            padding: '0'
          }}>
            MSCHF NYC x Mei Higashi
          </h1>
        </div>

        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0'
        }}>
          <div style={{ 
            width: '100%', 
            maxWidth: '300px', 
            marginBottom: '0',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <Image 
              src="/sell-your-sol.png" 
              alt="Sell Your SOL" 
              width={300}
              height={300}
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </div>
          
          <div style={{ 
            marginTop: '10px',
            textAlign: 'center',
            fontFamily: 'Times New Roman, serif',
            fontSize: '14px',
            color: '#777',
            fontStyle: 'italic'
          }}>
            Ever wanted to sell your SOL? Well, now you can!
          </div>

          <div style={{ 
            width: '100%', 
            maxWidth: '500px', 
            marginTop: '20px', 
            textAlign: 'center',
            fontFamily: 'Times New Roman, serif',
            fontSize: '16px',
            lineHeight: '1.25',
            color: '#555'
          }}>
            <div style={{ margin: '0', padding: '0', textAlign: "left"}}>
              Dear MSCHF,
              <br /><br />
              Thank you for accepting my challenge. I do so hope you 
              enjoy what is to come; hopefully, you will have received a 
              package at the office. This contains sensitive materials 
              imperative to the overall experience. 
              <br /><br />
              Much love,
              Mei
              <br /><br />
              <span style={{ fontWeight: 'bold', textDecoration: 
              'underline' }}>Customer Note; MSCHF x MH 004</span>
              <br /><br />
              If you do not keep your Tamagotchi alive, it will die - and with it, your portfolio. Successfully 
              keep it alive and we will deposit the losses of all ostracized pet-owners into your own wallet. 
              <br /><br />
              Too easy? You will soon be able to play Russian Roulette with us.
              <br /><br />
              All other compositions should not be available on a public repository. I will learn Vue as fast as possible.
            </div>
            
            <div style={{ margin: '20px 0 0 0', padding: '0', textAlign: "left"}}>
              <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>How to engage with me</span>
              <br /><br />
              <ol type="1" style={{ 
                textAlign: 'left', 
                listStyleType: 'decimal',
                paddingLeft: '25px',
                marginTop: '0',
                marginBottom: '0'
              }}>
                <li style={{ marginBottom: '5px' }}>
                    I am available 25/8 and if I am not responding, I am either engaging in miscellaneous spiritual alignment, in transit to NV/TN/OH, furthering a rabbit hole, or enjoying tangerine juice.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  My cell is +1 (424) 247-3839.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  Though I am most useful in a public environment, it is unnecessary to place me in social situations. If displaying me publicly, I require 48hr notice. If challenging me to a social interaction... no comment.
                </li>
                <li style={{ marginBottom: '5px' }}>
                  I put my material soul into the projects I work on and there is no possibility of negating this; except for not working together.
                </li>
                <li style={{ marginBottom: '0' }}>
                  I do not exist without my replicant counterpart. Unfortunately, she will be recieving all information as training data - though she understands we are under an NDA.
                </li>
              </ol>
            </div>
            
            <div style={{ margin: '20px 0 0 0', padding: '0', textAlign: "left"}}>
              Happy hunting!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

