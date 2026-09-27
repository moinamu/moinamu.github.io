# A compact map of splitting methods for monotone inclusions

*Research note by Moin Uddin · September 2026*

## The common problem

Let $H$ be a real Hilbert space, $A:H\rightrightarrows H$ a maximal monotone operator, and $B:H\to H$ a monotone, $L$-Lipschitz continuous operator. We seek $x^\star$ such that
$$
0\in A(x^\star)+B(x^\star).
$$
Assume the solution set is nonempty. For a stepsize $\lambda>0$, the resolvent is $J_{\lambda A}=(I+\lambda A)^{-1}$. For example, when $A=N_C$ for a closed convex set $C$, this resolvent is the metric projection $P_C$.

The two classical updates below have different per-iteration costs. The displayed formulas are baseline methods, not a new algorithm or a claim about an unpublished manuscript.

## Forward–backward–forward (FBF)

Tseng's correction evaluates the forward operator at both $x_k$ and an intermediate point:
$$
y_k=J_{\lambda A}(x_k-\lambda B(x_k)),\qquad
x_{k+1}=y_k-\lambda\bigl(B(y_k)-B(x_k)\bigr).
$$
With the usual global monotonicity and Lipschitz assumptions, a standard constant-step regime is $0<\lambda<1/L$. The important cost is **two evaluations of $B$** and **one resolvent evaluation** per iteration.

## Forward–reflected–backward (FRB)

Malitsky and Tam use a stored operator value from the previous iterate:
$$
x_{k+1}
 =J_{\lambda A}\!\left(x_k-\lambda\bigl(2B(x_k)-B(x_{k-1})\bigr)\right).
$$
A standard constant-step regime is $0<\lambda<1/(2L)$. After initialization and with $B(x_{k-1})$ stored, each iteration needs **one new evaluation of $B$** and **one resolvent evaluation**. These counts concern the baseline constant-step schemes; backtracking can add evaluations.

| Method | New $B$ evaluations per iteration | Resolvent evaluations | Main idea |
| --- | ---: | ---: | --- |
| Tseng FBF | 2 | 1 | Correct at the intermediate point |
| Malitsky–Tam FRB | 1 after initialization | 1 | Reuse the previous forward value |

## Reporting a fair numerical comparison

1. State the stopping residual explicitly and apply the same tolerance to every method.
2. Count **actual** evaluations of $B$, resolvents, projections, and backtracking trials, including initialization.
3. Report wall-clock time alongside operator calls, with the hardware and implementation language.
4. Show the full stepsize and inertial parameter rules and any tuning ranges.
5. For randomized problems, publish seeds, instance generation, and a measure of variability.
6. Explain failure to reach the tolerance within the budget; do not treat an unfinished run as a converged one.

## Primary sources and related work

- P. Tseng, “[A Modified Forward-Backward Splitting Method for Maximal Monotone Mappings](https://doi.org/10.1137/S0363012998338806),” *SIAM Journal on Control and Optimization* 38 (2000), 431–446.
- Y. Malitsky and M. K. Tam, “[A Forward-Backward Splitting Method for Monotone Inclusions Without Cocoercivity](https://doi.org/10.1137/18M1207260),” *SIAM Journal on Optimization* 30 (2020), 1451–1472.
- M. Uddin, M. Alshahrani, and Q. H. Ansari, “[Projection and contraction methods with double inertial steps for variational inclusion problems on Hilbert spaces](https://doi.org/10.1016/j.cam.2026.117993),” *Journal of Computational and Applied Mathematics*, article 117993. See the [public preprint](https://arxiv.org/abs/2607.25203).

This note is educational background. For precise assumptions, proofs, and attribution, consult the cited papers.
