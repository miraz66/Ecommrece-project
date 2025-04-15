<?php

namespace App\Http\Controllers;

use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CartController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function addToCart(Request $request)
    {
        if (!Auth::check()) {
            return redirect('/login')->with('message', 'Please login to add products to cart');
        }

        $product = Product::find($request->product_id);
        if (!$product) {
            return response()->json(['message' => 'Product not found'], 404);
        }

        $card = Cart::where('user_id', Auth::user()->id)
            ->where('product_id', $product->id)
            ->first();

        if ($card) {
            $card->quantity += 1;
            $card->save();
            return response()->json(['message' => 'Product quantity updated successfully']);
        }

        Cart::create([
            'user_id' => Auth::user()->id,
            'product_id' => $product->id,
            'name' => $product->name,
            'image' => $product->image,
            'price' => $product->price,
            'discount_price' => $product->discount_price,
            'stock' => $product->stock,
            'rating' => $product->rating,
            'description' => $product->description,
        ]);

        return;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cart $card)
    {
        //
    }
}
