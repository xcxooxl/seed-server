import exampleService from "@services/exampleService";
export const getExample = async (req, res) => {
	const examples = await exampleService.getExamples();
	res.status(200).json(examples);
};

export const getExampleById = async (req, res) => {
	const example = await exampleService.getExamplesById(req.params.id);
	res.status(200).json(example);
};
