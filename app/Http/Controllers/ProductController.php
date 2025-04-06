<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return inertia('Main/Home', compact('products'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        $product = Product::findOrFail($id);
        // $relatedProducts = Product::where('category', $product->category)
        //     ->where('id', '!=', $product->id)
        //     ->take(4)
        //     ->get();

        $products = Product::all();


        return inertia('Main/ShowProduct', [
            'product' => $product,
            // 'relatedProducts' => $relatedProducts,
            'products' => $products,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }

    public function search(Request $request)
    {
        $search = $request->input('search');
        $products = Product::where('name', 'like', '%' . $search . '%')->get();
        return inertia('Main/Home', compact('products'));
    }

    public function filter(Request $request)
    {
        $category = $request->input('category');
        $products = Product::where('category', $category)->get();
        return inertia('Main/Home', compact('products'));
    }
    public function sort(Request $request)
    {
        $sort = $request->input('sort');
        $products = Product::orderBy($sort, 'asc')->get();
        return inertia('Main/Home', compact('products'));
    }
    public function paginate(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $products = Product::paginate($perPage);
        return inertia('Main/Home', compact('products'));
    }

    public function shopLeftSidebar()
    {
        $products = Product::all();
        return inertia('Main/ShopLeftSidebar', compact('products'));
    }
}
