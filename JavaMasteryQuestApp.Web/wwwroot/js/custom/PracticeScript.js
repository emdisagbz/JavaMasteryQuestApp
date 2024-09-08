function compileAndRun() {
    const javaCode = document.getElementById('javaCode').value;

    const compilationResult = compileJava(javaCode);

    if (compilationResult.success) {
        const output = executeJava(javaCode);
        document.getElementById('output').textContent = output;
    } else {
        document.getElementById('output').innerHTML = `<span class="error">Compilation Error:</span><br>${compilationResult.error}`;
    }
}

function compileJava(javaCode) {
    // Check for class definition
    if (!javaCode.includes('class ')) {
        return { success: false, error: 'No class definition found.' };
    }

    // Check for balanced curly brackets
    let curlyBrackets = 0;
    for (let char of javaCode) {
        if (char === '{') {
            curlyBrackets++;
        } else if (char === '}') {
            curlyBrackets--;
        }
        if (curlyBrackets < 0) {
            return { success: false, error: 'Unmatched closing curly bracket.' };
        }
    }

    if (curlyBrackets !== 0) {
        return { success: false, error: 'Unmatched opening curly bracket.' };
    }

    // Check for mixed-type arithmetic operations
    const lines = javaCode.split('\n');
    const variables = {};

    for (let line of lines) {
        if (line.match(/(int|short|long|float|double)\s+\w+\s*=\s*[^;]+;/)) {
            const [_, type, varName] = line.match(/(int|short|long|float|double)\s+(\w+)\s*=/);
            variables[varName] = type;
        }
    }

    for (let line of lines) {
        if (line.includes('+') || line.includes('-') || line.includes('*') || line.includes('/')) {
            const match = line.match(/(\w+)\s*([\+\-\*\/])\s*(\w+)/);
            if (match) {
                const [_, leftOperand, operator, rightOperand] = match;
                const leftType = variables[leftOperand];
                const rightType = variables[rightOperand];

                if (leftType && rightType && leftType !== rightType) {
                    return { success: false, error: `Mixed-type arithmetic operation between ${leftType} and ${rightType} detected.` };
                }
            }
        }
    }

    return { success: true };
}

function executeJava(javaCode) {
    const INT_MIN = -2147483648;
    const INT_MAX = 2147483647;
    const SHORT_MIN = -32768;
    const SHORT_MAX = 32767;
    const LONG_MIN = -9223372036854775808;
    const LONG_MAX = 9223372036854775807;
    const FLOAT_MIN = -3.402823466E+38;
    const FLOAT_MAX = 3.402823466E+38;
    const DOUBLE_MIN = -1.7976931348623157E+308;
    const DOUBLE_MAX = 1.7976931348623157E+308;

    function isFloat(value) {
        return Number.isFinite(value) && typeof value === 'number' && value % 1 !== 0;
    }

    function isDouble(value) {
        return Number.isFinite(value) && typeof value === 'number' && value % 1 !== 0;
    }

    try {
        const variableDeclarations = javaCode.match(/(int|short|long|float|double)\s+\w+\s*=\s*[^;]+;/g) || [];
        let variables = {};

        for (let declaration of variableDeclarations) {
            const [_, type, varName, expression] = declaration.match(/(int|short|long|float|double)\s+(\w+)\s*=\s*([^;]+);/);
            const evaluatedExpression = eval(expression.replace(/(\w+)/g, (match) => {
                return variables[match] !== undefined ? variables[match] : match;
            }));

            if (type === 'int') {
                if (!Number.isInteger(evaluatedExpression)) {
                    return `Compilation Error:\nint only accepts non-decimal values`;
                }
                if (evaluatedExpression < INT_MIN || evaluatedExpression > INT_MAX) {
                    return `Compilation Error:\nint only ranges ${INT_MIN} to ${INT_MAX}`;
                }
            } else if (type === 'short') {
                if (!Number.isInteger(evaluatedExpression)) {
                    return `Compilation Error:\nshort only accepts non-decimal values`;
                }
                if (evaluatedExpression < SHORT_MIN || evaluatedExpression > SHORT_MAX) {
                    return `Compilation Error:\nshort only ranges ${SHORT_MIN} to ${SHORT_MAX}`;
                }
            } else if (type === 'long') {
                if (!Number.isInteger(evaluatedExpression)) {
                    return `Compilation Error:\nlong only accepts non-decimal values`;
                }
                if (evaluatedExpression < LONG_MIN || evaluatedExpression > LONG_MAX) {
                    return `Compilation Error:\nlong only ranges ${LONG_MIN} to ${LONG_MAX}`;
                }
            } else if (type === 'float') {
                if (!isFloat(evaluatedExpression)) {
                    return `Compilation Error:\nfloat must store a decimal value`;
                }
                if (evaluatedExpression < FLOAT_MIN || evaluatedExpression > FLOAT_MAX) {
                    return `Compilation Error:\nfloat only ranges ${FLOAT_MIN} to ${FLOAT_MAX}`;
                }
            } else if (type === 'double') {
                if (!isDouble(evaluatedExpression)) {
                    return `Compilation Error:\ndouble must store a decimal value`;
                }
                if (evaluatedExpression < DOUBLE_MIN || evaluatedExpression > DOUBLE_MAX) {
                    return `Compilation Error:\ndouble only ranges ${DOUBLE_MIN} to ${DOUBLE_MAX}`;
                }
            }

            variables[varName] = evaluatedExpression;
        }

        const printStatements = javaCode.match(/System\.out\.println\(\s*([^;]+)\s*\);/g) || [];
        let output = '';

        for (let statement of printStatements) {
            const [_, expression] = statement.match(/System\.out\.println\(\s*([^;]+)\s*\);/);
            const result = eval(expression.replace(/(\w+)/g, (match) => {
                return variables[match] !== undefined ? variables[match] : match;
            }));

            output += `${result}\n`;
        }

        if (output) {
            return output.trim();
        } else {
            return 'Execution successful (but no output detected).';
        }

    } catch (error) {
        return `Execution Error:\n${error.message}`;
    }
}

document.getElementById('compile').addEventListener('click', compileAndRun);

backButton.addEventListener("click", function() {
    window.location.href = '/Capstone/BasicLobby';
});