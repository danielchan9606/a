import "./App.css";

type Employee = {
	id: string;
	name: string;
	department: string;
	role: string;
	status: "Active" | "On Leave" | "Probation";
	attendance: string;
};

type LeaveRequest = {
	employee: string;
	type: "Annual" | "Sick" | "Personal";
	days: number;
	status: "Pending" | "Approved" | "Declined";
};

const metrics = [
	{ label: "Total Employees", value: "248", trend: "+12 this month" },
	{ label: "Open Positions", value: "14", trend: "3 urgent roles" },
	{ label: "Avg. Attendance", value: "96.2%", trend: "+1.1% vs last month" },
	{ label: "Pending Approvals", value: "9", trend: "4 leave, 5 onboarding" },
];

const employees: Employee[] = [
	{
		id: "EMP-1042",
		name: "Ava Rodriguez",
		department: "Engineering",
		role: "Frontend Developer",
		status: "Active",
		attendance: "98%",
	},
	{
		id: "EMP-0981",
		name: "Liam Carter",
		department: "Sales",
		role: "Account Executive",
		status: "On Leave",
		attendance: "93%",
	},
	{
		id: "EMP-1150",
		name: "Sophia Kim",
		department: "Human Resources",
		role: "HR Specialist",
		status: "Active",
		attendance: "99%",
	},
	{
		id: "EMP-1219",
		name: "Noah Williams",
		department: "Finance",
		role: "Financial Analyst",
		status: "Probation",
		attendance: "95%",
	},
];

const leaveRequests: LeaveRequest[] = [
	{ employee: "Emily Johnson", type: "Annual", days: 5, status: "Pending" },
	{ employee: "Jacob Brown", type: "Sick", days: 2, status: "Approved" },
	{ employee: "Mia Davis", type: "Personal", days: 1, status: "Pending" },
];

function App() {
	return (
		<div className="dashboard">
			<header className="dashboard-header">
				<div>
					<p className="eyebrow">Admin Panel</p>
					<h1>Human Resource Management Dashboard</h1>
					<p className="subtitle">
						Manage employees, hiring, attendance, and approvals from one place.
					</p>
				</div>
				<button type="button" className="primary-action">
					+ Add Employee
				</button>
			</header>

			<section className="metrics-grid" aria-label="HR metrics">
				{metrics.map((item) => (
					<article key={item.label} className="metric-card">
						<p className="metric-label">{item.label}</p>
						<p className="metric-value">{item.value}</p>
						<p className="metric-trend">{item.trend}</p>
					</article>
				))}
			</section>

			<section className="content-grid">
				<div className="panel">
					<div className="panel-header">
						<h2>Employee Directory</h2>
						<button type="button" className="ghost-button">
							View all
						</button>
					</div>
					<div className="table-wrapper">
						<table>
							<thead>
								<tr>
									<th>ID</th>
									<th>Name</th>
									<th>Department</th>
									<th>Role</th>
									<th>Status</th>
									<th>Attendance</th>
								</tr>
							</thead>
							<tbody>
								{employees.map((employee) => (
									<tr key={employee.id}>
										<td>{employee.id}</td>
										<td>{employee.name}</td>
										<td>{employee.department}</td>
										<td>{employee.role}</td>
										<td>
											<span className={`status status-${employee.status.replace(" ", "-").toLowerCase()}`}>
												{employee.status}
											</span>
										</td>
										<td>{employee.attendance}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				<div className="side-stack">
					<div className="panel">
						<div className="panel-header">
							<h2>Leave Requests</h2>
							<button type="button" className="ghost-button">
								Review
							</button>
						</div>
						<ul className="list">
							{leaveRequests.map((request) => (
								<li key={`${request.employee}-${request.type}`}>
									<div>
										<p className="list-title">{request.employee}</p>
										<p className="list-subtitle">
											{request.type} Leave · {request.days} day{request.days > 1 ? "s" : ""}
										</p>
									</div>
									<span className={`badge badge-${request.status.toLowerCase()}`}>
										{request.status}
									</span>
								</li>
							))}
						</ul>
					</div>

					<div className="panel">
						<h2>Quick Insights</h2>
						<ul className="insights">
							<li>Onboarding completion rate: <strong>88%</strong></li>
							<li>Training sessions this week: <strong>6</strong></li>
							<li>Employees due for review: <strong>17</strong></li>
							<li>Upcoming interviews: <strong>11</strong></li>
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}

export default App;
