import React from 'react';

const Header = ({ courseName }) => (
	<h1>{courseName}</h1>
);

const Part = ({ name, exercises }) => (
	<p>
		{name} {exercises}
	</p>
);

const Content = ({ parts }) => {
	const partRows = parts.map(part => (
		<Part
			key={part.name}
			name={part.name}
			exercises={part.exercises} />
	));

	return (
		<div>
			{partRows}
		</div>
	);
}

const Total = ({ parts }) => {
	const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

	return (
		<p>
			<b>{`Total of ${totalExercises} exercises`}</b>
		</p>
	)
};

const Course = ({ course }) => (
	<div>
		<Header courseName={course.name} />
		<Content parts={course.parts} />
		<Total parts={course.parts} />
	</div>
);

export default Course;
