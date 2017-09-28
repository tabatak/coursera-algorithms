package main

import "fmt"

func lcm(a, b int64) int64 {
	gcdnum := gcd(a, b)
	return (a * b) / gcdnum
}

func gcd(a, b int64) int64 {
	if b == 0 {
		return a
	}
	remainder := a % b
	return gcd(b, remainder)
}

func main() {
	fmt.Printf("%d\n", lcm(1827116622, 251772294))
}
