import pandas as pd


df = pd.read_excel("tabela.xlsx", header=2, engine="openpyxl")

df = df[["Analyte", "ref"]]

df = df.dropna(subset=["ref"])

df = df.rename(columns={"Analyte": "name", "ref": "rfd"})

df.to_json("RfD.json", orient="records", indent=2)

print("foi")
