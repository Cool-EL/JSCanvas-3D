export const matRotateX = (angle) => [
    [1, 0, 0, 0],
    [0, Math.cos(angle), -Math.sin(angle), 0],
    [0, Math.sin(angle), Math.cos(angle), 0],
    [0, 0, 0, 1],
];
export const matRotateY = (angle) => [
    [Math.cos(angle), 0, Math.sin(angle), 0],
    [0, 1, 0, 0],
    [-Math.sin(angle), 0, Math.cos(angle), 0],
    [0, 0, 0, 1],
];
export const matRotateZ = (angle) => [
    [Math.cos(angle), -Math.sin(angle), 0, 0],
    [Math.sin(angle), Math.cos(angle), 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1],
];
export function matAdd(matA, value) {
}
export function matMult(matA, matB) {
    if (matA[0].length !== matB.length)
        throw new Error("Can't multiply matrixes!");
    let tempMat = [];
    for (let i = 0; i < matA.length; i++) {
        let res = 0;
        let matRow = [];
        for (let j = 0; j < matB.length; j++) {
            res = 0;
            for (let k = 0; k < matA[0].length; k++) {
                res += (matA[i][k] * matB[j][k]);
            }
            matRow.push(res);
        }
        tempMat.push(matRow);
    }
    return tempMat;
}
export function matScale(matA, value) {
    let tempMat = structuredClone(matA);
    for (let i = 0; i < tempMat.length; i++) {
        for (let j = 0; j < tempMat[i].length; j++) {
            tempMat[i][j] = (tempMat[i][j] * value);
        }
    }
    return tempMat;
}
export function translateXY(matA, value) {
    let tempMat = structuredClone(matA);
    for (let i = 0; i < tempMat.length; i++) {
        tempMat[i][0] = (tempMat[i][0] + value[0]);
        tempMat[i][1] = (tempMat[i][1] + value[1]);
    }
    return tempMat;
}
export function matDot(matA, matB) {
}
export function rotateX(matA, angle) {
    const matRotateXByAngle = matRotateX(angle);
    return matMult(matA, matRotateXByAngle);
}
export function rotateY(matA, angle) {
    const matRotateYByAngle = matRotateY(angle);
    return matMult(matA, matRotateYByAngle);
}
export function rotateZ(matA, angle) {
    const matRotateZByAngle = matRotateZ(angle);
    return matMult(matA, matRotateZByAngle);
}
// module.exports = {
// 	matRotateX,
// 	matRotateY,
// 	matRotateZ,
// 	matAdd,
// 	matMult,
// 	matDot,
// 	rotateX
// }
