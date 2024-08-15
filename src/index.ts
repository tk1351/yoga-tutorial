import { createYoga } from 'graphql-yoga';
import { schema } from './schema';
import { ExecutionContext } from 'graphql/execution/execute';

const yoga = createYoga({ schema });

const fetch = async (req: Request, env: Env, ctx: ExecutionContext) => {
	return yoga(req, ctx);
};

export default {
	fetch,
};
