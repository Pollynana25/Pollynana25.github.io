<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PollyNANA - The Blue Dachshund Memecoin</title>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <link rel="icon" type="image/png" href="images/logo.png" />
    <style>
      body {
        cursor: url('images/paw-cursor.png'), auto;
        background: linear-gradient(180deg, #fff8e7 0%, #ffe8c8 100%);
        font-family: 'Baloo 2', cursive;
        overflow-x: hidden;
      }
      #preloader {
        background: #fff url('images/loading.gif') no-repeat center center;
        background-size: 80px 80px;
        height: 100vh;
        width: 100vw;
        position: fixed;
        z-index: 999;
      }
      header {
        background-color: #ffcc70;
        padding: 10px 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }
      .hero {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 60px 0;
        background: url('images/hero-bg.png') no-repeat center center;
        background-size: cover;
      }
      .btn {
        background-color: #ff6f61;
        color: white;
        padding: 12px 24px;
        border-radius: 25px;
        text-decoration: none;
        font-size: 18px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
      }
      .btn:hover {
        background-color: #ff4433;
      }
      .section {
        padding: 60px 0;
        background-color: #fff5dc;
      }
      .social-icons img {
        width: 40px;
        margin: 0 10px;
        transition: transform 0.3s;
      }
      .social-icons img:hover {
        transform: scale(1.2);
      }
      footer {
        background: #ffcc70;
        text-align: center;
        padding: 20px;
      }
      canvas#trail {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        pointer-events: none;
        z-index: 0;
      }
    </style>
  </head>
  <body>
    <div id="preloader"></div>

    <header class="animated fadeInDown">
      <div class="container">
        <div class="logo">
          <img src="images/logo.png" alt="PollyNANA Logo" />
          <h1>PollyNANA</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#tokenomics">Tokenomics</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#community">Community</a></li>
            <li><a href="#buy">Buy</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content">
          <h2>Meet PollyNANA 🐾</h2>
          <p>The brave blue dachshund memecoin, ready to take over the blockchain one paw at a time.</p>
          <a href="#buy" class="btn">Buy Now</a>
        </div>
        <div class="hero-image">
          <img src="images/pollyMascot.png" alt="Polly Mascot" class="animated bounceInRight" />
        </div>
      </div>
    </section>

    <section class="about section" id="about">
      <div class="container">
        <h2>Why PollyNANA?</h2>
        <p>
          PollyNANA has always been overlooked for her tiny legs and big heart. But now she's leading a revolution of kindness, chaos, and barking fun on the blockchain.
        </p>
        <img src="images/logo.png" alt="Polly logo" class="about-logo" />
      </div>
    </section>

    <section class="tokenomics section" id="tokenomics">
      <div class="container">
        <h2>Tokenomics</h2>
        <ul>
          <li><strong>Community / Airdrop:</strong> 35% – 350,000,000 POLLY</li>
          <li><strong>Liquidity (DEX):</strong> 30% – 300,000,000 POLLY</li>
          <li><strong>Team / Founder:</strong> 25% – 250,000,000 POLLY</li>
          <li><strong>Marketing / Growth:</strong> 10% – 100,000,000 POLLY</li>
        </ul>
        <p>
          <strong>Contract:</strong><br />
          <code>0x49af8c0dd0d2c5bce9e3afd2a1d404004863c052</code>
        </p>
      </div>
    </section>

    <section class="roadmap section" id="roadmap">
      <div class="container">
        <h2>Roadmap</h2>
        <ol>
          <li>Launch site and socials</li>
          <li>Airdrop to first holders</li>
          <li>PollyNANA meme contest</li>
          <li>DEX Listings</li>
          <li>Merchandise & NFTs</li>
          <li>Global awareness campaign</li>
        </ol>
      </div>
    </section>

    <section class="community section" id="community">
      <div class="container">
        <h2>Join the Community</h2>
        <div class="social-icons">
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733635.png" alt="Twitter" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" /></a>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/5968/5968756.png" alt="Discord" /></a>
        </div>
      </div>
    </section>

    <footer>
      <div class="container">
        &copy; 2025 PollyNANA. All rights reserved.
      </div>
    </footer>

    <canvas id="trail"></canvas>
    <audio id="barkSound" src="https://www.fesliyanstudios.com/play-mp3/6548" preload="auto"></audio>
    <script src="script.js"></script>
  </body>
</html>
