export let mode: string;
export let entry: string;
export namespace module {
    let rules: {
        test: string;
        loader: string;
        exclude: string;
        options: {
            configFile: string;
        };
    }[];
}
export namespace resolve {
    let extensions: string[];
}
export namespace output {
    let filename: string;
    let path: any;
}
export let devtool: string;