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
						
					</nav>
				</header>

			
				<section id="banner">
					<h2>BudgetPlan</h2>
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
								<span class="icon solid major fa-cloud accent4"></span>
								<h3>Track Your Expenses</h3>
								<p>Easily monitor your daily expenses to understand your spending habits.</p>
							</section>
							<section>
								<span class="icon solid major fa-lock accent5"></span>
								<h3>Secure Data Management</h3>
								<p>Your financial data is safe with our top-notch security measures.</p>
							</section>
						</div>
					</section>

					<div class="row">
						<div class="col-6 col-12-narrower">

							<section class="box special">
								<span class="image featured"><img src="images/pic02.jpg" alt="" /></span>
								<h3>Set Your Budgets</h3>
								<p>Create and customize budgets for different categories to better manage your finances.</p>
							</section>

						</div>
						<div class="col-6 col-12-narrower">

							<section class="box special">
								<span class="image featured"><img src="images/pic03.jpg" alt="" /></span>
								<h3>Simplified Transaction Management</h3>
								<p>Effortlessly create and categorize transactions for better budget oversight. Our app allows you to add and delete transactions, ensuring that you stay on top of your financial game.</p>
							</section>

						</div>
					</div>

				</section>

			
				<footer id="footer">
					<ul class="icons">
						<li><a href="https://github.com/Mwan3kii/Budget-management-system.git" class="icon brands fa-github"><span class="label">Github</span></a></li>
					</ul>
					<ul class="copyright">
						<li>&copy; Untitled. All rights reserved.</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
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