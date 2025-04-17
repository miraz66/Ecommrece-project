<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        $carts = $this->getUserCart();
        return inertia('Main/Home', ['products' => $products, 'carts' => $carts]);
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
        $carts = $this->getUserCart();

        return inertia('Main/ShowProduct', [
            'product' => $product,
            // 'relatedProducts' => $relatedProducts,
            'products' => $products,
            'carts' => $carts,
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
        $carts = $this->getUserCart();

        return inertia('Main/Home', [
            'products' => $products,
            'carts' => $carts,
        ]);
    }

    public function filter(Request $request)
    {
        $category = $request->input('category');
        $products = Product::where('category', $category)->get();
        $carts = $this->getUserCart();
        return inertia('Main/Home', [
            'products' => $products,
            'carts' => $carts,
        ]);
    }
    public function sort(Request $request)
    {
        $sort = $request->input('sort');
        $products = Product::orderBy($sort, 'asc')->get();
        $carts = $this->getUserCart();

        return inertia('Main/Home', [
            'products' => $products,
            'carts' => $carts,
        ]);
    }
    public function paginate(Request $request)
    {
        $perPage = $request->input('per_page', 10);
        $products = Product::paginate($perPage);
        $carts = $this->getUserCart();

        return inertia('Main/Home', [
            'products' => $products,
            'carts' => $carts,
        ]);
    }

    public function shopLeftSidebar()
    {
        $products = Product::get();
        $carts = Cart::get();

        return inertia('Main/ShopLeftSidebar', [
            'products' => $products,
            'carts' => $carts,
        ]);
    }

    // private function
    private function getUserCart()
    {
        // this is the cart for the logged-in user
        $user = Auth::user();
        if (!$user) {
            return [];
        }
        return Cart::where('user_id', $user->id)->get();
    }
}
