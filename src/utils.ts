export const matRotateX = ( angle: number ) => [
	[1,               0,                0, 0],
	[0, Math.cos(angle), -Math.sin(angle), 0],
	[0, Math.sin(angle),  Math.cos(angle), 0],
	[0,               0,                0, 1],
]
export const matRotateY = ( angle: number ) => [
	[ Math.cos(angle), 0, Math.sin(angle), 0],
	[               0, 1,               0, 0],
	[-Math.sin(angle), 0, Math.cos(angle), 0],
	[               0, 0,               0, 1],
]
export const matRotateZ = ( angle: number ) => [
	[Math.cos(angle), -Math.sin(angle), 0, 0],
	[Math.sin(angle),  Math.cos(angle), 0, 0],
	[              0,                0, 1, 0],
	[              0,                0, 0, 1],
]


export function matAdd( matA: Array<Array<number>>, value: number ) {
	
}
export function matMult( matA: Array<Array<number>>, matB: Array<Array<number>> ) {
	if( matA[0].length !== matB.length ) throw new Error( "Can't multiply matrixes!" );

	let tempMat: Array<Array<number>> = [];
	for( let i: number = 0; i < matA.length; i++ ) {
		let res: number = 0;
		let matRow: Array<number> = [];
		for( let j: number = 0; j < matB.length; j++ ) {
			res = 0;
			for( let k: number = 0; k < matA[0].length; k++ ) {
				res += ( matA[i][k] * matB[j][k] );
			}
			matRow.push( res );
		}
		tempMat.push( matRow );
	}
	
	return tempMat;
}
export function matScale( matA: Array<Array<number>>, value: number ) {
	let tempMat: Array<Array<number>> = structuredClone( matA );
	for( let i: number = 0; i < tempMat.length; i++ ) {
		for( let j: number = 0; j < tempMat[i].length; j++ ) {
			tempMat[i][j] = ( tempMat[i][j] * value );
		}
	}
	
	return tempMat;
}
export function translateXY( matA: Array<Array<number>>, value: Array<number> ) {
	let tempMat: Array<Array<number>> = structuredClone( matA );
	for( let i: number = 0; i < tempMat.length; i++ ) {
		tempMat[i][0] = ( tempMat[i][0] + value[0] );
		tempMat[i][1] = ( tempMat[i][1] + value[1] );
	}
	
	return tempMat;
}
export function matDot( matA: Array<Array<number>>, matB: Array<Array<number>> ) {

}


export function rotateX( matA: Array<Array<number>>, angle: number ) {
	const matRotateXByAngle = matRotateX( angle );

	return matMult( matA, matRotateXByAngle );
}
export function rotateY( matA: Array<Array<number>>, angle: number ) {
	const matRotateYByAngle = matRotateY( angle );

	return matMult( matA, matRotateYByAngle );
}
export function rotateZ( matA: Array<Array<number>>, angle: number ) {
	const matRotateZByAngle = matRotateZ( angle );

	return matMult( matA, matRotateZByAngle );
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