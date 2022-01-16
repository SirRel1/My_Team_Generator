const fs = require('fs');
const inquirer = require('inquirer');
const { mainModule } = require('process');

console.log('Team Builder!');
inquirer
	.prompt([
		{
			title: 'input',
			message: "What is the team manager's name?",
			name: 'manage',
		},
		{
			type: 'input',
			message: "What is the team manager's id?",
			name: 'managerId',
		},
		{
			type: 'input',
			message: "What is the team manager's email?",
			name: 'managerEmail',
		},
		{
			type: 'input',
			message: "What is the team manager's office number?",
			name: 'managerOffice',
		},
		{
			type: 'list',
			message: 'Which type of team member would you like to add?',
			name: 'memberType',
			choices: ['Intern', 'Engineer', "I don't want to add anymore."],
		},
		{
			input: 'list',
			name: 'nuMemberName',
			message(answers) {
				return `What is your ${answers.memberType}'s name?`;
			},
		},
		{
			type: 'input',
			name: 'nuMemberId',
			message(answers) {
				return `What is the ${answers.memberType}'s id?`;
			},
		},
		{
			type: 'input',
			name: 'nuMemberEmail',
			message(answers) {
				return `What is the ${answers.memberType}'s email?`;
			},
		},
		{
			type: 'input',
			name: 'nuMemberGit',
			message(answers) {
				return `What is the ${answers.memberType}'s GitHub?`;
			},
		},
		{
			type: 'list',
			message: 'Which type of team member would you like to add next?',
			name: 'nuMemberType',
			choices: ['Intern', 'Engineer', "I don't want to add anymore."],
		},
		{
			input: 'list',
			name: 'nameAddTwo',
			message(answers) {
				return `What is your ${answers.nuMemberType}'s name?`;
			},
			when(answers) {
				return (
					answers.nuMemberType === 'Intern' ||
					answers.nuMemberType === 'Engineer'
				);
			},
		},
		{
			type: 'input',
			name: 'idAddTwo',
			message(answers) {
				return `What is the ${answers.nuMemberType}'s id?`;
			},
			when(answers) {
				return (
					answers.nuMemberType === 'Intern' ||
					answers.nuMemberType === 'Engineer'
				);
			},
		},
		{
			type: 'input',
			name: 'emailAddTwo',
			message(answers) {
				return `What is the ${answers.nuMemberType}'s email?`;
			},
			when(answers) {
				return (
					answers.nuMemberType === 'Intern' ||
					answers.nuMemberType === 'Engineer'
				);
			},
		},
		{
			type: 'input',
			name: 'gitAddTwo',
			message(answers) {
				return `What is the ${answers.nuMemberType}'s GitHub?`;
			},
			when(answers) {
				return (
					answers.nuMemberType === 'Intern' ||
					answers.nuMemberType === 'Engineer'
				);
			},
		},
		{
			type: 'list',
			message: 'Which type of team member would you like to add next?',
			name: 'nuMemberTypeAdd',
			choices: ['Intern', 'Engineer', "I don't want to add anymore."],
			when(answers) {
				return (
					answers.nuMemberType === 'Intern' ||
					answers.nuMemberType === 'Engineer'
				);
			},
		},

		{
			input: 'list',
			name: 'MemberNameAdd',
			message(answers) {
				return `What is your ${answers.nuMemberTypeAdd}'s name?`;
			},
			when(answers) {
				return (
					answers.nuMemberTypeAdd === 'Intern' ||
					answers.nuMemberTypeAdd === 'Engineer'
				);
			},
		},
		{
			type: 'input',
			name: 'MemberIdAdd',
			message(answers) {
				return `What is the ${answers.nuMemberTypeAdd}'s id?`;
			},
			when(answers) {
				return (
					answers.nuMemberTypeAdd === 'Intern' ||
					answers.nuMemberTypeAdd === 'Engineer'
				);
			},
		},
		{
			type: 'input',
			name: 'MemberEmailAdd',
			message(answers) {
				return `What is the ${answers.nuMemberTypeAdd}'s email?`;
			},
			when(answers) {
				return (
					answers.nuMemberTypeAdd === 'Intern' ||
					answers.nuMemberTypeAdd === 'Engineer'
				);
			},
		},
		{
			type: 'input',
			name: 'MemberGitAdd',
			message(answers) {
				return `What is the ${answers.nuMemberTypeAdd}'s GitHub?`;
			},
			when(answers) {
				return (
					answers.nuMemberTypeAdd === 'Intern' ||
					answers.nuMemberTypeAdd === 'Engineer'
				);
			},
		},
		{
			type: 'list',
			message: 'Which type of team member would you like to add now?',
			name: 'AddLast',
			choices: ['Intern', 'Engineer', "I don't want to add anymore."],
			when(answers) {
				return (
					answers.nuMemberTypeAdd === 'Intern' ||
					answers.nuMemberTypeAdd === 'Engineer'
				);
			},
		},
	])
	.then((results) => {
		const ans = `<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<link rel="stylesheet" href="team.css">
			<title>Team Builder</title>
		</head>
		<body>
			<div class="title"><h1>My Team</h1></div>
			<div class="main-card">
				<div class="card-top">
					<h1>${results.manage}
						<p>Manager</p>
					</h1>
				</div>
				<div class="card-bottom">
					<h3>ID1: ${results.managerId}</h3>
					<hr>
					<h3>EMAIL: <a href="mailto:${results.managerEmail}@gmail.com?Subject=Hello%20world!">${results.managerEmail}</a></h3>
					<hr>
					<h3>Office # ${results.managerOffice}</h3>
				</div>
			</div>
			
			<div class="main-card">
				<div class="card-top">
					<h1>${results.nuMemberName}
						<p>${results.memberType}</p>
					</h1>
				</div>
				<div class="card-bottom">
					<h3>ID2: ${results.nuMemberId}</h3>
					<hr>
					<h3>EMAIL: <a href="mailto:${results.nuMemberEmail}@gmail.com?Subject=Hiring%20opportunity!">${results.nuMemberEmail}</a></h3>
					<hr>
					<h3>GITHUB: <a href="https://github.com/${results.nuMemberGit}">${results.nuMemberGit}</a></h3>
				</div>
			</div>
			<div class="main-card">
				<div class="card-top">
					<h1>${results.nameAddTwo}
						<p>${results.nuMemberType}</p>
					</h1>
				</div>
				<div class="card-bottom">
					<h3>ID3: ${results.idAddTwo}</h3>
					<hr>
					<h3>EMAIL: <a href=""mailto:${results.emailAddTwo}@gmail.com?Subject=Hiring%20opportunity!"${results.emailAddTwo}">${results.emailAddTwo}</a></h3>
					<hr>
					<h3>GITHUB:  <a href="https://github.com/${results.gitAddTwo}">${results.gitAddTwo}</a></h3>
				</div>
			</div>
			
		</body>
		</html>`;

		fs.writeFileSync('./dist/index.html', `${ans}`);
	});
