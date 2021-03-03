const ROLES = {
	Recruiter: "Recruiter",
	Applicant: "Applicant"
};

const checkRole = (...roles) => (req, res, next) => {
	console.log(req.payload);
	if (!req.payload) {
		return res.status(401).send("Unauthorized");
	}

	const hasRole = roles.find((role) => req.payload.role === role);
	console.log(`printing role:${hasRole}`);
	if (!hasRole) {
		return res.status(403).send("You are not allowed to make this request.");
	}

	return next();
};

const role = { ROLES, checkRole };

module.exports = role;
