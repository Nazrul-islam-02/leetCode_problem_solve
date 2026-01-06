var maxLevelSum = function(root) {
    if (!root) return 0;

    let queue = [root];
    let level = 1;
    let maxSum = -Infinity;
    let answerLevel = 1;

    while (queue.length > 0) {
        let levelSize = queue.length;
        let sum = 0;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            sum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (sum > maxSum) {
            maxSum = sum;
            answerLevel = level;
        }

        level++;
    }

    return answerLevel;
};
