import random
import statistics

random.seed(42)
N = 10000
results = {f"L{i}": [] for i in range(1, 8)}

for _ in range(N):
    # Layer 1: Knowledge workers (0.64-1.0B, uniform)
    L1 = random.uniform(640, 1000)  # millions
    
    # Layer 2: Occasional AI users
    # US penetration 50% (Gallup, tight CI ~±3pp)
    us_rate = random.gauss(0.50, 0.015)
    # Tiered geo multiplier: weighted average ~0.75 with spread
    geo = random.triangular(0.60, 0.90, 0.75)
    L2 = L1 * us_rate * geo

    # Layer 3: Frontier Professionals
    # 16% of AI users (Microsoft WTI, ±3pp survey uncertainty)
    frontier_rate = random.gauss(0.16, 0.015)
    # Base = AI users globally (somewhere between daily and frequent)
    ai_user_base = L1 * random.gauss(0.28, 0.03) * geo  # frequent+ as base
    L3 = ai_user_base * max(0.05, frontier_rate)
    
    # Layer 4: Agentic coders
    # Dev population 20.8-36.5M (uniform, wide spread)
    devs = random.uniform(20.8, 36.5)
    # 51% daily AI use (SO, ±5pp for non-probability sample)
    dev_daily = random.gauss(0.51, 0.025)
    # 31.8% use agents (SO, ±5pp)
    agent_rate = random.gauss(0.318, 0.025)
    L4 = devs * dev_daily * agent_rate
    
    # Layer 5: C-level AI coders
    # 44% DM among Frontier (WTI verified, ±5pp)
    dm_rate = random.gauss(0.44, 0.025)
    L5_frontier_leaders = L3 * dm_rate * 1000  # convert to thousands for L3 in millions
    # Hands-on coders among leaders: 3-5% (heuristic, wide)
    handson = random.uniform(0.02, 0.06)
    L5 = L5_frontier_leaders * handson  # in thousands
    
    # Layer 6: AI builders
    # 5-10% builders among hands-on coders (heuristic)
    builder_rate = random.uniform(0.04, 0.12)
    L6 = L5 * builder_rate  # in thousands
    
    # Layer 7: Regulated emerging banking
    # Fraction of builders in regulated EM banking (very uncertain)
    reg_rate = random.uniform(0.005, 0.04)
    L7 = L6 * reg_rate * 1000  # convert to individuals
    
    results["L1"].append(L1)
    results["L2"].append(L2)
    results["L3"].append(L3)
    results["L4"].append(L4)
    results["L5"].append(L5)
    results["L6"].append(L6)
    results["L7"].append(L7)

print("=" * 70)
print("MONTE CARLO FUNNEL SIMULATION — 10,000 iterations")
print("=" * 70)
units = {"L1": "M", "L2": "M", "L3": "M", "L4": "M", "L5": "K", "L6": "K", "L7": "individuals"}
names = {
    "L1": "Knowledge Workers",
    "L2": "Occasional AI Users",  
    "L3": "Frontier Professionals",
    "L4": "Agentic Coders",
    "L5": "C-level AI Coders",
    "L6": "AI Builders",
    "L7": "Regulated EM Banking"
}

for layer in ["L1", "L2", "L3", "L4", "L5", "L6", "L7"]:
    data = sorted(results[layer])
    p5 = data[int(N * 0.05)]
    p50 = data[int(N * 0.50)]
    p95 = data[int(N * 0.95)]
    mean = statistics.mean(data)
    u = units[layer]
    print(f"\n{layer}: {names[layer]} ({u})")
    print(f"  Mean:   {mean:>10.1f}")
    print(f"  Median: {p50:>10.1f}")
    print(f"  5th %:  {p5:>10.1f}")
    print(f"  95th %: {p95:>10.1f}")
    print(f"  90% CI: [{p5:.1f} — {p95:.1f}]")
