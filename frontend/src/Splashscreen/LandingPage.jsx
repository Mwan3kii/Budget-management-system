import React from 'react'
import './assets/css/main.css';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div class="landing is-preload">
		<div id="page-wrapper">
				<header id="header" class="alt">
					<h1>BudgetPlan</h1>
					<nav id="nav">
					<ul>
						<li><Link to="/about">About</Link></li>
					</ul>
					</nav>
				</header>

			
				<section id="banner">
					<h2>BudgetPlan💰</h2>
					<p>Mobile web application for managing your budget and expenses efficiently.</p>
					<ul class="actions special">
						<li><Link to="/signup" class="button primary">Sign Up</Link></li>
						<li><Link to="/login" class="button">Login</Link></li>
					</ul>
				</section>

			
				<section id="main" class="container">

					<section class="box special">
						<header class="major">
							<h2>Introducing the ultimate Budget Management App</h2>
							<p>Keep track of your spending, set budgets,<br />
							and achieve your financial goals with ease.</p>
						</header>
						<span class="image featured"><img src="images/pic01.jpg" alt="" /></span>
					</section>

					<section class="box special features">
						<div class="features-row">
							<section>
								<span class="icon solid major fa-wallet accent4"></span>
								<h3>Track Your Expenses</h3>
								<p>Easily monitor your daily expenses to understand your spending habits.</p>
							</section>
							<section>
								<span class="icon solid major fa-lock accent5"></span>
								<h3>Secure Data Management</h3>
								<p>Your financial data is safe with our top-notch security measures.</p>
							</section>
						</div>
						<div class="features-row">
							<section>
								<span class="icon solid major fa-credit-card accent4"></span>
								<h3>Set Your Budgets</h3>
								<p>Create and customize budgets for different categories to better manage your finances.</p>
							</section>
							<section>
								<span class="icon solid major fa-receipt accent5"></span>
								<h3>Transaction Management</h3>
								<p>Create and categorize transactions for better budget oversight</p>
							</section>
						</div>
					</section>

				</section>
			
				<footer id="footer">
					<ul class="icons">
						<li><a href="https://github.com/Mwan3kii/Budget-management-system.git" class="icon brands fa-github"><span class="label">Github</span></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; BudgetPlan. All rights reserved.</li><li>Design: <a href="http://html5up.net">Agatha Mwaniki</a></li>
					</ul>
				</footer>

		</div>

		
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.dropotron.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>
    </div>
  )
}

export default LandingPage;