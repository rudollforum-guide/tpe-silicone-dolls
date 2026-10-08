"use client";

import { useMemo, useState } from "react";
import { ModelCard } from "@/components/model-card";
import type { Model, ModelCategory, ModelMaterial } from "@/data/models";

type ModelCatalogueProps = {
  models: readonly Model[];
};

const materials: readonly ModelMaterial[] = ["Full Silicone", "TPE", "S-TPE", "Hybrid", "Other / Unknown"];
const categories: readonly ModelCategory[] = ["Premium Realistic", "Anime / Character", "Technology & Customization"];

export function ModelCatalogue({ models }: ModelCatalogueProps) {
  const [brand, setBrand] = useState("all");
  const [material, setMaterial] = useState("all");
  const [category, setCategory] = useState("all");
  const brandOptions = useMemo(() => Array.from(new Map(models.map((model) => [model.brandSlug, model.brandName])).entries()), [models]);
  const filteredModels = models.filter((model) =>
    (brand === "all" || model.brandSlug === brand) &&
    (material === "all" || (model.material ?? "Other / Unknown") === material) &&
    (category === "all" || model.category === category),
  );

  function clearFilters() {
    setBrand("all");
    setMaterial("all");
    setCategory("all");
  }

  return (
    <>
      <div className="catalogue-filters" aria-label="Model filters">
        <label>Brand<select value={brand} onChange={(event) => setBrand(event.target.value)}><option value="all">All brands</option>{brandOptions.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}</select></label>
        <label>Material<select value={material} onChange={(event) => setMaterial(event.target.value)}><option value="all">All materials</option>{materials.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        <label>Category<select value={category} onChange={(event) => setCategory(event.target.value)}><option value="all">All categories</option>{categories.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
        <button type="button" onClick={clearFilters}>Clear filters</button>
      </div>
      <div className="catalogue-count" aria-live="polite"><span>{String(filteredModels.length).padStart(2, "0")}</span> models shown</div>
      {filteredModels.length ? (
        <div className="model-grid model-grid--catalogue">{filteredModels.map((model) => <ModelCard key={`${model.brandSlug}-${model.slug}`} model={model} />)}</div>
      ) : (
        <div className="catalogue-empty"><p>No models match this combination.</p><button className="text-link" type="button" onClick={clearFilters}>Reset filters</button></div>
      )}
    </>
  );
}
